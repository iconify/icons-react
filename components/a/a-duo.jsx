import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apew5yb4w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apew5yb4w"/>`,
		"fallback": "glyphs:a-duo",
	});
}

export default Component;
