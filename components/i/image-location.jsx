import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vg1y9gbnc.css';
import '../../css/h/hvvu1cbma.css';
import '../../css/x/xx_uqofyb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vg1y9gbnc"/><path class="hvvu1cbma"/><path class="xx_uqofyb"/></g>`,
		"fallback": "streamline-flex:image-location",
	});
}

export default Component;
