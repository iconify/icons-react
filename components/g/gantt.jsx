import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr2i9yi8b.css';

const viewBox = {"width":1792,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr2i9yi8b"/>`,
		"fallback": "vs:gantt",
	});
}

export default Component;
