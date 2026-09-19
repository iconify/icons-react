import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ove_r8gba.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ove_r8gba"/>`,
		"fallback": "codicon:debug-breakpoint-unsupported",
	});
}

export default Component;
