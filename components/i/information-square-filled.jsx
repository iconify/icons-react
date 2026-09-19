import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpmw0obfn.css';
import '../../css/x/x83nu3j7w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpmw0obfn"/><path class="x83nu3j7w"/>`,
		"fallback": "carbon:information-square-filled",
	});
}

export default Component;
