import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u56_ywbll.css';
import '../../css/a/ahi5vcc6u.css';
import '../../css/f/fxlzn8gcb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u56_ywbll"/><path class="ahi5vcc6u"/><path class="fxlzn8gcb"/>`,
		"fallback": "energy-icons:dumbbell-20-bold",
	});
}

export default Component;
