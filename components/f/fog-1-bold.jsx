import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr4ur_7jk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr4ur_7jk"/>`,
		"fallback": "glyphs:fog-1-bold",
	});
}

export default Component;
