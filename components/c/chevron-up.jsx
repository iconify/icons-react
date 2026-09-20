import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_5p4ltcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_5p4ltcs"/>`,
		"fallback": "mdi-light:chevron-up",
	});
}

export default Component;
