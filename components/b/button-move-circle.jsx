import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/malduobwn.css';
import '../../css/y/yp1d_0bvl.css';
import '../../css/d/d94u8-bnu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="malduobwn"/><path class="yp1d_0bvl"/><path class="d94u8-bnu"/></g>`,
		"fallback": "streamline-flex-color:button-move-circle",
	});
}

export default Component;
