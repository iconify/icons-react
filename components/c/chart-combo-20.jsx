import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aem9n2zvr.css';
import '../../css/w/wqxi-7byp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aem9n2zvr"/><path class="wqxi-7byp"/>`,
		"fallback": "energy-icons:chart-combo-20",
	});
}

export default Component;
