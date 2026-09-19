import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4-_1ab-p.css';

const viewBox = {"width":1664,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4-_1ab-p"/>`,
		"fallback": "fa:calculator",
	});
}

export default Component;
