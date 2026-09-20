import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n023oz33c.css';
import '../../css/v/v7oavacaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n023oz33c"/><path class="v7oavacaw"/>`,
		"fallback": "streamline-ultimate:global-business-man-user-bold",
	});
}

export default Component;
