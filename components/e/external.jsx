import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xip25pbfv.css';
import '../../css/t/t5nlyebtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="xip25pbfv"/><path class="t5nlyebtt"/></g>`,
		"fallback": "lets-icons:external",
	});
}

export default Component;
