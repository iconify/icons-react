import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of3k1s7ga.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of3k1s7ga"/>`,
		"fallback": "ooui:arrow-previous-rtl",
	});
}

export default Component;
