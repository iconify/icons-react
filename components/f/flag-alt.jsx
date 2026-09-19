import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j02vs_14r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j02vs_14r"/>`,
		"fallback": "gg:flag-alt",
	});
}

export default Component;
