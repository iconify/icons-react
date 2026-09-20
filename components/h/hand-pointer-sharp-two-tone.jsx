import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s0nmlsbuk.css';
import '../../css/m/m52lrpbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="s0nmlsbuk"/><path class="m52lrpbxp"/></g>`,
		"fallback": "keyline-icons:hand-pointer-sharp-two-tone",
	});
}

export default Component;
