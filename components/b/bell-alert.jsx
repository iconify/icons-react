import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d64o0ob4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d64o0ob4d"/>`,
		"fallback": "heroicons-outline:bell-alert",
	});
}

export default Component;
