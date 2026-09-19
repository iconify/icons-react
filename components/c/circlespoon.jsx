import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imi44z7-h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imi44z7-h"/>`,
		"fallback": "whh:circlespoon",
	});
}

export default Component;
