import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4li2q-5e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j4li2q-5e"/>`,
		"fallback": "lsicon:close-small-filled",
	});
}

export default Component;
