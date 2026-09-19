import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2_yd-19i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y2_yd-19i"/>`,
		"fallback": "glyphs:cog-1-duo",
	});
}

export default Component;
