import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/moopqmbwo.css';
import '../../css/m/mn0o0sb_d.css';
import '../../css/k/kvvgt7e_b.css';
import '../../css/a/ayo73pbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="moopqmbwo"/><path class="mn0o0sb_d"/><path class="kvvgt7e_b"/><path class="ayo73pbzj"/></g>`,
		"fallback": "keyline-icons:eye-off-duotone",
	});
}

export default Component;
