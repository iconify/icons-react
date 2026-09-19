import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1n06kb2c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1n06kb2c"/>`,
		"fallback": "glyphs:hand-holding-water",
	});
}

export default Component;
