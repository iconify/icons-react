import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qhcl1ub_h.css';
import '../../css/n/nf1uv1baf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qhcl1ub_h"/><path class="nf1uv1baf"/></g>`,
		"fallback": "streamline:food-drinks-cocktail-shaker-alcohol-drink-mix-shake-cocktail",
	});
}

export default Component;
