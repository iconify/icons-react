import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fec4cjbkq.css';
import '../../css/u/u1--n3bbd.css';
import '../../css/w/wwqa-8bfl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fec4cjbkq"/><path class="u1--n3bbd"/><path class="wwqa-8bfl"/>`,
		"fallback": "energy-icons:arrow-right-square-20-bold",
	});
}

export default Component;
