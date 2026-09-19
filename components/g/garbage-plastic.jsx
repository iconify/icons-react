import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x87cd2g6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x87cd2g6x"/>`,
		"fallback": "cbi:garbage-plastic",
	});
}

export default Component;
