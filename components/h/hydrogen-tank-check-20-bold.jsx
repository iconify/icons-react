import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmp_5zpfe.css';
import '../../css/j/jj7ew2vkc.css';
import '../../css/k/k2ahn_bem.css';
import '../../css/e/e54bjx_0d.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmp_5zpfe"/><path class="jj7ew2vkc"/><path class="k2ahn_bem"/><path class="e54bjx_0d"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:hydrogen-tank-check-20-bold",
	});
}

export default Component;
