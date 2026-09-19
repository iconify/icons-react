import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr6_cjb9r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr6_cjb9r"/>`,
		"fallback": "bi:filetype-jsx",
	});
}

export default Component;
