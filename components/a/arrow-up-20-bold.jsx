import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjx8q2jsf.css';
import '../../css/e/ez3axdbjz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjx8q2jsf"/><path class="ez3axdbjz"/>`,
		"fallback": "energy-icons:arrow-up-20-bold",
	});
}

export default Component;
