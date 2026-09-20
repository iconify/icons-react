import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzu5dbbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzu5dbbsf"/>`,
		"fallback": "uil:12-plus",
	});
}

export default Component;
