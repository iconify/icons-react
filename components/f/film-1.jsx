import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omfe1vp1w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omfe1vp1w"/>`,
		"fallback": "glyphs:film-1",
	});
}

export default Component;
