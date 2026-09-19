import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t21qwvb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t21qwvb0w"/>`,
		"fallback": "grommet-icons:flag-fill",
	});
}

export default Component;
