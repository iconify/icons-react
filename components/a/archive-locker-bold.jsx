import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2swubccs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2swubccs"/>`,
		"fallback": "streamline-ultimate:archive-locker-bold",
	});
}

export default Component;
