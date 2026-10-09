import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aucraj6bv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aucraj6bv"/>`,
		"fallback": "energy-icons:hot-spring-20",
	});
}

export default Component;
