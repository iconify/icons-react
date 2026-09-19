import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9wylob2q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9wylob2q"/>`,
		"fallback": "glyphs:heading-outline",
	});
}

export default Component;
