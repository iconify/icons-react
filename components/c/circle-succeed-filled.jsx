import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt9p4zb0m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lt9p4zb0m"/>`,
		"fallback": "lsicon:circle-succeed-filled",
	});
}

export default Component;
