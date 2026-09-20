import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cukg2h6lb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cukg2h6lb"/>`,
		"fallback": "pinhead:5-plus",
	});
}

export default Component;
