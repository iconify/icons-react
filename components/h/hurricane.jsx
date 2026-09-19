import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8s26pbah.css';
import '../../css/s/s07htpbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8s26pbah"/><path class="s07htpbtb"/>`,
		"fallback": "boxicons:hurricane",
	});
}

export default Component;
