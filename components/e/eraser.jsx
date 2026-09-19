import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f378ucbiw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f378ucbiw"/>`,
		"fallback": "whh:eraser",
	});
}

export default Component;
