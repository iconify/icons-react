import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayw6rtddd.css';
import '../../css/e/e-psi4b0u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayw6rtddd"/><path class="e-psi4b0u"/>`,
		"fallback": "ooui:chart-pie",
	});
}

export default Component;
