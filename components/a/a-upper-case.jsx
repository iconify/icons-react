import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3az_8srk.css';

const viewBox = {"width":547,"height":762};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3az_8srk"/>`,
		"fallback": "ls:a-upper-case",
	});
}

export default Component;
