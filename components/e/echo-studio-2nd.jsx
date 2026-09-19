import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqgj4jwat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqgj4jwat"/>`,
		"fallback": "cbi:echo-studio-2nd",
	});
}

export default Component;
