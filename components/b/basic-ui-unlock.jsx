import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uticddb9u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uticddb9u"/>`,
		"fallback": "streamline-block:basic-ui-unlock",
	});
}

export default Component;
