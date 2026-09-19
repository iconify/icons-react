import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2f5-g1mk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2f5-g1mk"/>`,
		"fallback": "glyphs:docs-1-bold",
	});
}

export default Component;
