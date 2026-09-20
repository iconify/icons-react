import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r24k1jfmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r24k1jfmt"/>`,
		"fallback": "reicon:grid8-filled",
	});
}

export default Component;
