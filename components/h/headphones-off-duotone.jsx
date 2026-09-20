import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nidoa5bdt.css';
import '../../css/h/ho5cgr_fx.css';
import '../../css/a/ayo73pbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nidoa5bdt"/><path class="ho5cgr_fx"/><path class="ayo73pbzj"/></g>`,
		"fallback": "keyline-icons:headphones-off-duotone",
	});
}

export default Component;
