import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gun8es9ig.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gun8es9ig"/>`,
		"fallback": "bi:brightness-high-fill",
	});
}

export default Component;
