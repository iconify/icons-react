import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7c98za8i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7c98za8i"/>`,
		"fallback": "glyphs:heart-1",
	});
}

export default Component;
