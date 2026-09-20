import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqvjpsbwu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqvjpsbwu"/>`,
		"fallback": "pinhead:arrow-left-to-left-bracket",
	});
}

export default Component;
