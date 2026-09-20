import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sk_c-dokx.css';
import '../../css/n/n_gm4-i7n.css';
import '../../css/a/aim0ujbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="sk_c-dokx"/><path class="n_gm4-i7n"/><path class="aim0ujbji"/></g>`,
		"fallback": "lucide:accessibility",
	});
}

export default Component;
