import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw7xf08hx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw7xf08hx"/>`,
		"fallback": "pinhead:car-with-rupee",
	});
}

export default Component;
