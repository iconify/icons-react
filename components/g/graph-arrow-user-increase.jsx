import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/z/z86ro5b9o.css';
import '../../css/i/i0hbfcbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="z86ro5b9o"/><path class="i0hbfcbwy"/></g>`,
		"fallback": "streamline-sharp-color:graph-arrow-user-increase",
	});
}

export default Component;
