import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr3r60b7i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sr3r60b7i"/>`,
		"fallback": "streamline:chess-king-solid",
	});
}

export default Component;
