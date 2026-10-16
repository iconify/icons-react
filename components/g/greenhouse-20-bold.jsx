import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h228pmbtq.css';
import '../../css/j/jaad26bbm.css';
import '../../css/k/ky8gx6l8z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h228pmbtq"/><path class="jaad26bbm"/><path class="ky8gx6l8z"/>`,
		"fallback": "energy-icons:greenhouse-20-bold",
	});
}

export default Component;
