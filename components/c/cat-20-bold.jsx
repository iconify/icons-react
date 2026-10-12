import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq1olub4s.css';
import '../../css/q/qtnp7cceo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq1olub4s"/><path class="qtnp7cceo"/>`,
		"fallback": "energy-icons:cat-20-bold",
	});
}

export default Component;
