import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th5y43rma.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th5y43rma"/>`,
		"fallback": "whh:egg",
	});
}

export default Component;
