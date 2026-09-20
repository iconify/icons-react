import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/menb0t_lm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="menb0t_lm"/>`,
		"fallback": "pinhead:hand-reaching-down",
	});
}

export default Component;
