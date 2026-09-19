import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0xtwtpgw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0xtwtpgw"/>`,
		"fallback": "bytesize:caret-right",
	});
}

export default Component;
