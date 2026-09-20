import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jervz5bij.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jervz5bij"/>`,
		"fallback": "streamline:class-lesson-solid",
	});
}

export default Component;
