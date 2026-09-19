import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfe9tcbnf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfe9tcbnf"/>`,
		"fallback": "bi:8-circle",
	});
}

export default Component;
