import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipba9j3av.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipba9j3av"/>`,
		"fallback": "basil:headset-solid",
	});
}

export default Component;
