import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux8t0hbvv.css';
import '../../css/s/s9s7xp23i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux8t0hbvv"/><path class="s9s7xp23i"/>`,
		"fallback": "carbon:calculator",
	});
}

export default Component;
