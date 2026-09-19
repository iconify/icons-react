import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo6jg5d0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo6jg5d0i"/>`,
		"fallback": "cbi:arlo-q",
	});
}

export default Component;
