import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etwi6sbrt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etwi6sbrt"/>`,
		"fallback": "glyphs:credit-card",
	});
}

export default Component;
