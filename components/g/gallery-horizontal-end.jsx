import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjigr4ppa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjigr4ppa"/>`,
		"fallback": "boxicons:gallery-horizontal-end",
	});
}

export default Component;
