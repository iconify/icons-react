import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or95d4b4o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or95d4b4o"/>`,
		"fallback": "glyphs:h-4-bold",
	});
}

export default Component;
