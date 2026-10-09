import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itz70zb2a.css';
import '../../css/r/ry8p8oeqb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itz70zb2a"/><path class="ry8p8oeqb"/>`,
		"fallback": "energy-icons:dining-20",
	});
}

export default Component;
