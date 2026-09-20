import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/yj0jynlgh.css';
import '../../css/i/i9fjvjobi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="yj0jynlgh"/><path class="i9fjvjobi"/></g>`,
		"fallback": "streamline-sharp-color:arrow-up-dashed-square",
	});
}

export default Component;
