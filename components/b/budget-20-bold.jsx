import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iccsyvk3j.css';
import '../../css/q/qcnm51b0a.css';
import '../../css/s/sukfcubwp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iccsyvk3j"/><path class="qcnm51b0a"/><path class="sukfcubwp"/>`,
		"fallback": "energy-icons:budget-20-bold",
	});
}

export default Component;
