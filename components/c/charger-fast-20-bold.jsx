import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r__2x3s5d.css';
import '../../css/c/cjbp44b0v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r__2x3s5d"/><path class="cjbp44b0v"/>`,
		"fallback": "energy-icons:charger-fast-20-bold",
	});
}

export default Component;
