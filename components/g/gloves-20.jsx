import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb5l6nbqc.css';
import '../../css/u/u6mkpijxa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb5l6nbqc"/><path class="u6mkpijxa"/>`,
		"fallback": "energy-icons:gloves-20",
	});
}

export default Component;
