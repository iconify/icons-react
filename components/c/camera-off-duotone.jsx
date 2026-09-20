import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i90ett96z.css';
import '../../css/q/qopxxhr1p.css';
import '../../css/u/uco51fb1f.css';
import '../../css/a/ayo73pbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i90ett96z"/><path class="qopxxhr1p"/><path class="uco51fb1f"/><path class="ayo73pbzj"/></g>`,
		"fallback": "keyline-icons:camera-off-duotone",
	});
}

export default Component;
