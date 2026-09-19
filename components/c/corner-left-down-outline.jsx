import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8v583a5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8v583a5t"/>`,
		"fallback": "eva:corner-left-down-outline",
	});
}

export default Component;
