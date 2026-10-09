import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aem9n2zvr.css';
import '../../css/u/ubsqc0zyi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aem9n2zvr"/><path class="ubsqc0zyi"/>`,
		"fallback": "energy-icons:chart-waterfall-20",
	});
}

export default Component;
