import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cg8ka286d.css';
import '../../css/y/ylgp65mpw.css';
import '../../css/s/sk_1bsbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cg8ka286d"/><path class="ylgp65mpw"/><path class="sk_1bsbgp"/></g>`,
		"fallback": "lucide:biceps-flexed",
	});
}

export default Component;
