import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek_n8cbpe.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek_n8cbpe"/>`,
		"fallback": "picon:cut",
	});
}

export default Component;
