import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_84t1yuh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_84t1yuh"/>`,
		"fallback": "glyphs:h-2-bold",
	});
}

export default Component;
