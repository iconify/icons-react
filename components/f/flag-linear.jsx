import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfv63-bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfv63-bns"/>`,
		"fallback": "solar:flag-linear",
	});
}

export default Component;
