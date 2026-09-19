import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk5u4qb2l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk5u4qb2l"/>`,
		"fallback": "glyphs:bench-duo",
	});
}

export default Component;
