import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo9fgqb0k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bo9fgqb0k"/>`,
		"fallback": "lsicon:double-arrow-left-filled",
	});
}

export default Component;
