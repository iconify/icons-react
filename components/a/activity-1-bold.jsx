import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb9ucoekk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb9ucoekk"/>`,
		"fallback": "glyphs:activity-1-bold",
	});
}

export default Component;
