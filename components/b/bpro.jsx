import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq8be9b8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq8be9b8g"/>`,
		"fallback": "token:bpro",
	});
}

export default Component;
