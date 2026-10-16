import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrq7csbic.css';
import '../../css/k/kbvc24bmw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrq7csbic"/><path class="kbvc24bmw"/>`,
		"fallback": "energy-icons:heat-sink-20-bold",
	});
}

export default Component;
