import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmvozccrz.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmvozccrz"/>`,
		"fallback": "ps:digg",
	});
}

export default Component;
