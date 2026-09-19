import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlldztbnf.css';

const viewBox = {"width":490,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlldztbnf"/>`,
		"fallback": "file-icons:fusebox",
	});
}

export default Component;
