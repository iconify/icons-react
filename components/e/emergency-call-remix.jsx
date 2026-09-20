import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk4-s9iov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rk4-s9iov"/>`,
		"fallback": "streamline-sharp:emergency-call-remix",
	});
}

export default Component;
