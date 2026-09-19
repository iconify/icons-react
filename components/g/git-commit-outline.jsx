import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9u81yn3y.css';
import '../../css/c/c_2y2ytjs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="i9u81yn3y"/><path class="c_2y2ytjs"/>`,
		"fallback": "famicons:git-commit-outline",
	});
}

export default Component;
