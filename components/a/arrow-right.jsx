import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4n791u6l.css';

const viewBox = {"width":380,"height":790};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4n791u6l"/>`,
		"fallback": "il:arrow-right",
	});
}

export default Component;
