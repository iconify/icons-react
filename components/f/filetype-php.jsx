import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cplsxkl6j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cplsxkl6j"/>`,
		"fallback": "bi:filetype-php",
	});
}

export default Component;
