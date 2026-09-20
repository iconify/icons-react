import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k256bgpkp.css';
import '../../css/u/uq0564gvw.css';
import '../../css/t/t7plqdber.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k256bgpkp"/><circle class="uq0564gvw"/><path class="t7plqdber"/></g>`,
		"fallback": "streamline:food-fish-cook-cooking-fish-seafood-nutrition-food",
	});
}

export default Component;
