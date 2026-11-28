import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf1qxsb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf1qxsb6u"/>`,
		"fallback": "iconaut:circle-three-eighth-solid",
	});
}

export default Component;
