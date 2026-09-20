import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi4p9nbze.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi4p9nbze"/>`,
		"fallback": "streamline:fork-spoon",
	});
}

export default Component;
