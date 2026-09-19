import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtawl0bdz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtawl0bdz"/>`,
		"fallback": "dinkie-icons:clock",
	});
}

export default Component;
