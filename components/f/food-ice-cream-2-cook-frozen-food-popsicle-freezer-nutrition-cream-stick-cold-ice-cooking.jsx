import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xxriqybqc.css';
import '../../css/q/qu9z20bxo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="xxriqybqc"/><path class="qu9z20bxo"/></g>`,
		"fallback": "streamline:food-ice-cream-2-cook-frozen-food-popsicle-freezer-nutrition-cream-stick-cold-ice-cooking",
	});
}

export default Component;
