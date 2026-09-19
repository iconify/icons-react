import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyyx4s3jh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyyx4s3jh"/>`,
		"fallback": "glyphs:battery-warn-bold",
	});
}

export default Component;
