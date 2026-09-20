import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qcp5nyvvw.css';
import '../../css/d/d537sub7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qcp5nyvvw"/><path class="d537sub7e"/></g>`,
		"fallback": "keyline-icons:chart-scatter-3d-sharp-duotone",
	});
}

export default Component;
