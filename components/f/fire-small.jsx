import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_wb409zl.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_wb409zl"/>`,
		"fallback": "dinkie-icons:fire-small",
	});
}

export default Component;
