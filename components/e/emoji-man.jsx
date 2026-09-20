import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th6z7zbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th6z7zbvz"/>`,
		"fallback": "mdi:emoji-man",
	});
}

export default Component;
