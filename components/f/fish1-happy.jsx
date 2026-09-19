import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u21022btp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u21022btp"/>`,
		"fallback": "codicon:fish1-happy",
	});
}

export default Component;
