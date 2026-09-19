import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpzw4zd3j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpzw4zd3j"/>`,
		"fallback": "bi:dribbble",
	});
}

export default Component;
