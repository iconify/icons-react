import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccfvpkbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccfvpkbcq"/>`,
		"fallback": "ci:circle-chevron-down",
	});
}

export default Component;
