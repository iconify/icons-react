import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m__s6x_rn.css';
import '../../css/e/e_pm_3zoi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m__s6x_rn"/><path class="e_pm_3zoi"/></g>`,
		"fallback": "glyphs:envelope-open",
	});
}

export default Component;
