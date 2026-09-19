import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpru91b0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpru91b0s"/>`,
		"fallback": "ci:hamburger",
	});
}

export default Component;
