import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg1ehhb9u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg1ehhb9u"/>`,
		"fallback": "osmic:elevator-14",
	});
}

export default Component;
