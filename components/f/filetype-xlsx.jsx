import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duh_o4gwu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duh_o4gwu"/>`,
		"fallback": "bi:filetype-xlsx",
	});
}

export default Component;
