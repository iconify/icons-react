import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qasq7qb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qasq7qb0v"/>`,
		"fallback": "streamline-sharp:brightness-1",
	});
}

export default Component;
