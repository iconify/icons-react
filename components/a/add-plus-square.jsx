import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df8xwmbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df8xwmbnr"/>`,
		"fallback": "ci:add-plus-square",
	});
}

export default Component;
