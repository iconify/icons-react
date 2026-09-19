import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hphbwmrgv.css';

const viewBox = {"width":464,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hphbwmrgv"/>`,
		"fallback": "ps:broken-link",
	});
}

export default Component;
