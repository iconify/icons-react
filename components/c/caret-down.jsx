import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5z957buc.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o5z957buc"/>`,
		"fallback": "fad:caret-down",
	});
}

export default Component;
