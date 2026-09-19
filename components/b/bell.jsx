import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlycj0bgi.css';

const viewBox = {"width":700,"height":820};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlycj0bgi"/>`,
		"fallback": "il:bell",
	});
}

export default Component;
