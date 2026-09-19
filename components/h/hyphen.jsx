import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfje2gbge.css';

const viewBox = {"width":274,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfje2gbge"/>`,
		"fallback": "ls:hyphen",
	});
}

export default Component;
