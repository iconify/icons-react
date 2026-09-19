import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2blh85iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2blh85iw"/>`,
		"fallback": "ci:arrow-down-up",
	});
}

export default Component;
