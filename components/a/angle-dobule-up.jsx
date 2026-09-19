import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3_2z0moj.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3_2z0moj"/>`,
		"fallback": "fontisto:angle-dobule-up",
	});
}

export default Component;
