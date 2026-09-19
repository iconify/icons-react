import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biyapqb9z.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biyapqb9z"/>`,
		"fallback": "f7:delete-left-fill",
	});
}

export default Component;
