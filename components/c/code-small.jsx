import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu2fvcb_r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu2fvcb_r"/>`,
		"fallback": "dinkie-icons:code-small",
	});
}

export default Component;
