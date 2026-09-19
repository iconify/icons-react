import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0v9gt2dh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0v9gt2dh"/>`,
		"fallback": "glyphs:activity-outline",
	});
}

export default Component;
