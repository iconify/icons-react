import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po1ze2c7q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po1ze2c7q"/>`,
		"fallback": "fa7-solid:helmet-un",
	});
}

export default Component;
