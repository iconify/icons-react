import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9c-be7dw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9c-be7dw"/>`,
		"fallback": "pinhead:coffin-with-om",
	});
}

export default Component;
