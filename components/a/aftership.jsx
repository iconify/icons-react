import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ropp-6rfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ropp-6rfy"/>`,
		"fallback": "thesvg-color:aftership",
	});
}

export default Component;
