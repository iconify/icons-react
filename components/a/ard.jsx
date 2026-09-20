import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as6zalapf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as6zalapf"/>`,
		"fallback": "thesvg-color:ard",
	});
}

export default Component;
