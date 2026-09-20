import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qel0gob0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qel0gob0u"/>`,
		"fallback": "stash:expand-vertical-solid",
	});
}

export default Component;
