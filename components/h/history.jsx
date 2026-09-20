import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dehqt92jf.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dehqt92jf"/>`,
		"fallback": "octicon:history",
	});
}

export default Component;
