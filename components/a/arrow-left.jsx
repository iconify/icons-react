import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjdv0xboy.css';

const viewBox = {"width":380,"height":790};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjdv0xboy"/>`,
		"fallback": "il:arrow-left",
	});
}

export default Component;
