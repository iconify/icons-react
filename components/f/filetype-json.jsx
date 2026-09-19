import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1mj98zcl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1mj98zcl"/>`,
		"fallback": "bi:filetype-json",
	});
}

export default Component;
