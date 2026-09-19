import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o516ekcpi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o516ekcpi"/>`,
		"fallback": "dashicons:buddicons-forums",
	});
}

export default Component;
