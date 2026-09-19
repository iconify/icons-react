import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8xxkabrr.css';

const viewBox = {"width":457,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8xxkabrr"/>`,
		"fallback": "file-icons:expo",
	});
}

export default Component;
