import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khndaxb-m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khndaxb-m"/>`,
		"fallback": "streamline:arrow-cursor-1-remix",
	});
}

export default Component;
