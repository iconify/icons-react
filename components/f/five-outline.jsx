import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7707_6ks.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7707_6ks"/>`,
		"fallback": "glyphs:five-outline",
	});
}

export default Component;
