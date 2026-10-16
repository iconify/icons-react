import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqby4c3ii.css';
import '../../css/s/sz385ccax.css';
import '../../css/p/pofuqcb8y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqby4c3ii"/><path class="sz385ccax"/><path class="pofuqcb8y"/>`,
		"fallback": "energy-icons:freezing-rain-20",
	});
}

export default Component;
