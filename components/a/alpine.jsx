import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f97e5f--j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f97e5f--j"/>`,
		"fallback": "cbi:alpine",
	});
}

export default Component;
