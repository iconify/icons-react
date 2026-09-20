import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxhx1cm-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxhx1cm-u"/>`,
		"fallback": "lets-icons:horizontal-down-right-main",
	});
}

export default Component;
