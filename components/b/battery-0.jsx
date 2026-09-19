import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u222dxldz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u222dxldz"/>`,
		"fallback": "f7:battery-0",
	});
}

export default Component;
