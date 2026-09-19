import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auhox3b4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auhox3b4y"/>`,
		"fallback": "ci:code",
	});
}

export default Component;
