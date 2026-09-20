import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdb3-q2ts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hdb3-q2ts"/>`,
		"fallback": "reicon:desktop-filled",
	});
}

export default Component;
