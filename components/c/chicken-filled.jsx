import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4iom7s1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4iom7s1x"/>`,
		"fallback": "griddy-icons:chicken-filled",
	});
}

export default Component;
