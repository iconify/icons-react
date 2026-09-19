import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vq0e2pbnv.css';
import '../../css/h/husey_bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vq0e2pbnv"/><path class="husey_bmb"/></g>`,
		"fallback": "iconoir:gamepad",
	});
}

export default Component;
