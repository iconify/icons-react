import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo6miub8i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo6miub8i"/>`,
		"fallback": "energy-icons:align-left-20",
	});
}

export default Component;
