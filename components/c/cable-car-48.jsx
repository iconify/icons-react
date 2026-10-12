import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f54a80bxs.css';
import '../../css/a/ae8a-5b_j.css';
import '../../css/e/enbnz-bnz.css';
import '../../css/k/k7zqwda6d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f54a80bxs"/><path class="ae8a-5b_j"/><path class="enbnz-bnz"/><path class="k7zqwda6d"/>`,
		"fallback": "energy-icons:cable-car-48",
	});
}

export default Component;
