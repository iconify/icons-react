import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc35mgb4o.css';
import '../../css/y/y2opnv8ug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc35mgb4o"/><path class="y2opnv8ug"/>`,
		"fallback": "mingcute:apple-fruit-line",
	});
}

export default Component;
