import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/k-likpb8w.css';
import '../../css/y/y6xrnibtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="k-likpb8w"/><path class="y6xrnibtd"/></g>`,
		"fallback": "streamline-sharp-color:archive-box",
	});
}

export default Component;
