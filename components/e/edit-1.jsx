import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsd9tkbhz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsd9tkbhz"/>`,
		"fallback": "glyphs:edit-1",
	});
}

export default Component;
