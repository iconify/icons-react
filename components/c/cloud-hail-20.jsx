import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwfe8ub8s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwfe8ub8s"/>`,
		"fallback": "energy-icons:cloud-hail-20",
	});
}

export default Component;
