import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqg11dbyx.css';

const viewBox = {"width":487,"height":775};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqg11dbyx"/>`,
		"fallback": "ls:4",
	});
}

export default Component;
