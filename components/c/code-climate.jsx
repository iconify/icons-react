import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdmmufb4b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path transform="matrix(1.00302 0 0 1 -.05 0)" class="jdmmufb4b"/>`,
		"fallback": "catppuccin:code-climate",
	});
}

export default Component;
