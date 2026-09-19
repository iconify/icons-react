import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsam74iwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsam74iwu"/>`,
		"fallback": "griddy-icons:folder",
	});
}

export default Component;
