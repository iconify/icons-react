import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw7mxqbyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw7mxqbyq"/>`,
		"fallback": "reicon:align-horizontally-filled",
	});
}

export default Component;
