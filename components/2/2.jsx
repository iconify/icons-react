import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvvzgibti.css';

const viewBox = {"width":481,"height":754};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvvzgibti"/>`,
		"fallback": "ls:2",
	});
}

export default Component;
