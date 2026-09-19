import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlktqpbzo.css';
import '../../css/k/kif_tcbyp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlktqpbzo"/><path class="kif_tcbyp"/>`,
		"fallback": "ion:erlenmeyer-flask",
	});
}

export default Component;
