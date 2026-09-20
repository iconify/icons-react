import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/iz71ztbph.css';
import '../../css/q/qtf0zacnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="iz71ztbph"/><path class="qtf0zacnx"/></g>`,
		"fallback": "streamline-sharp-color:feather-pen",
	});
}

export default Component;
