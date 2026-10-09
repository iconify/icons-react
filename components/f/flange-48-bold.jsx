import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_6rndbde.css';
import '../../css/t/ti_1d3blo.css';
import '../../css/k/kew39h_ks.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_6rndbde"/><path class="ti_1d3blo"/><path class="kew39h_ks"/>`,
		"fallback": "energy-icons:flange-48-bold",
	});
}

export default Component;
