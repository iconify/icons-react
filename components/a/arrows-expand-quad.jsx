import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2u5f7bvb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2u5f7bvb"/>`,
		"fallback": "glyphs:arrows-expand-quad",
	});
}

export default Component;
