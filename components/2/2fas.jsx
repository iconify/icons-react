import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc-g-1byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc-g-1byr"/>`,
		"fallback": "thesvg-color:2fas",
	});
}

export default Component;
