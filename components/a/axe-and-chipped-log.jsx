import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh_a1ub3t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh_a1ub3t"/>`,
		"fallback": "pinhead:axe-and-chipped-log",
	});
}

export default Component;
