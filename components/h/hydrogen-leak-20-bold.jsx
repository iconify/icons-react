import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm8o83l5u.css';
import '../../css/a/ajmi_0bqu.css';
import '../../css/d/djpikibkr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm8o83l5u"/><path class="ajmi_0bqu"/><path class="djpikibkr"/>`,
		"fallback": "energy-icons:hydrogen-leak-20-bold",
	});
}

export default Component;
