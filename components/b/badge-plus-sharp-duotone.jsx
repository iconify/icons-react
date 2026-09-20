import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/g70whwsdk.css';
import '../../css/v/vo1f5lbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="g70whwsdk"/><path class="vo1f5lbpj"/></g>`,
		"fallback": "keyline-icons:badge-plus-sharp-duotone",
	});
}

export default Component;
