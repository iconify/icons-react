import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8d9-acuv.css';
import '../../css/t/t3nsxqbji.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8d9-acuv"/><path class="t3nsxqbji"/>`,
		"fallback": "energy-icons:dosimeter-48-bold",
	});
}

export default Component;
