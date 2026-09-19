import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygufz_b9f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygufz_b9f"/>`,
		"fallback": "glyphs:chevron-double-duo",
	});
}

export default Component;
