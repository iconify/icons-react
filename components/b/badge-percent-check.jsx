import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b25cx9bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b25cx9bkl"/>`,
		"fallback": "noviair:badge-percent-check",
	});
}

export default Component;
