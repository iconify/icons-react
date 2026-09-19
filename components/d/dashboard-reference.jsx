import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f11294w7f.css';
import '../../css/c/c6vxn_-6e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f11294w7f"/><path class="c6vxn_-6e"/>`,
		"fallback": "carbon:dashboard-reference",
	});
}

export default Component;
