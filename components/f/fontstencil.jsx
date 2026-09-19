import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch0cusbxz.css';

const viewBox = {"width":834,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch0cusbxz"/>`,
		"fallback": "whh:fontstencil",
	});
}

export default Component;
