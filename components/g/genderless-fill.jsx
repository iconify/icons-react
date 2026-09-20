import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgoe6vbte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgoe6vbte"/>`,
		"fallback": "ri:genderless-fill",
	});
}

export default Component;
