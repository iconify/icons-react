import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6xfrmbct.css';
import '../../css/u/u4aylz3fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6xfrmbct"/><path class="u4aylz3fv"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-apps-browser-bold",
	});
}

export default Component;
