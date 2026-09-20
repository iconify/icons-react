import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5fbydb8u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k5fbydb8u"/>`,
		"fallback": "lsicon:hand-shake-filled",
	});
}

export default Component;
