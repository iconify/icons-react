import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb3hhnbhc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb3hhnbhc"/>`,
		"fallback": "glyphs:foot-print",
	});
}

export default Component;
