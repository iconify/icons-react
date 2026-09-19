import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxn65k2kh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxn65k2kh"/>`,
		"fallback": "griddy-icons:feather-filled",
	});
}

export default Component;
