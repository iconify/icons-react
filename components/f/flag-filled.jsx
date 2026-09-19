import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwup8r63e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwup8r63e"/>`,
		"fallback": "boxicons:flag-filled",
	});
}

export default Component;
