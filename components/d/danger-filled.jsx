import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otig88m8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otig88m8v"/>`,
		"fallback": "reicon:danger-filled",
	});
}

export default Component;
