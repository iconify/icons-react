import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcia1ds6l.css';
import '../../css/k/k7ts6_btn.css';
import '../../css/q/q5g7_gbur.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcia1ds6l"/><path class="k7ts6_btn"/><path class="q5g7_gbur"/>`,
		"fallback": "energy-icons:hazard-toxic-20-bold",
	});
}

export default Component;
