import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqra0k40v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqra0k40v"/>`,
		"fallback": "simple-icons:angellist",
	});
}

export default Component;
