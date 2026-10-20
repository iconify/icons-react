import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg1pd4bom.css';
import '../../css/v/vqn056b1i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg1pd4bom"/><path class="vqn056b1i"/>`,
		"fallback": "energy-icons:bag-check-20-bold",
	});
}

export default Component;
