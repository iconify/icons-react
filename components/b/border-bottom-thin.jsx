import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amns3_b5t.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amns3_b5t"/>`,
		"fallback": "pullo:border-bottom-thin",
	});
}

export default Component;
