import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs166ab5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs166ab5i"/>`,
		"fallback": "mdi:eight-ball",
	});
}

export default Component;
