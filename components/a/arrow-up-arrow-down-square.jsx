import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqr03cb3r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqr03cb3r"/>`,
		"fallback": "f7:arrow-up-arrow-down-square",
	});
}

export default Component;
