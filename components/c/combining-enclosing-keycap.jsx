import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrks0fbpf.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrks0fbpf"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:combining-enclosing-keycap",
	});
}

export default Component;
