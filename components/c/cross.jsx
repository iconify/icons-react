import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyk3-1bck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyk3-1bck"/>`,
		"fallback": "akar-icons:cross",
	});
}

export default Component;
