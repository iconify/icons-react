import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b76cn79oc.css';
import '../../css/j/j4audb3xv.css';
import '../../css/f/fvcv6nbrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b76cn79oc"/><path class="j4audb3xv"/><path class="fvcv6nbrs"/>`,
		"fallback": "energy-icons:balloon-48",
	});
}

export default Component;
