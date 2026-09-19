import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zurw434pl.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zurw434pl"/>`,
		"fallback": "fa:first-order",
	});
}

export default Component;
