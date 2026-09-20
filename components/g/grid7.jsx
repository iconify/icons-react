import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx0z5_a3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx0z5_a3v"/>`,
		"fallback": "reicon:grid7",
	});
}

export default Component;
