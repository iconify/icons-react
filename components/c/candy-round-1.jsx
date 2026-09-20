import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv16s7lvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv16s7lvc"/>`,
		"fallback": "lineicons:candy-round-1",
	});
}

export default Component;
