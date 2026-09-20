import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvv8gtn1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvv8gtn1o"/>`,
		"fallback": "thesvg-color:autoprefixer",
	});
}

export default Component;
