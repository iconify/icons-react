import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj7-q5b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj7-q5b4d"/>`,
		"fallback": "grommet-icons:caret-down-fill",
	});
}

export default Component;
