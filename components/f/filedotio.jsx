import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1pa38b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1pa38b9s"/>`,
		"fallback": "simple-icons:filedotio",
	});
}

export default Component;
