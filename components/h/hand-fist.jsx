import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnjp8ib7s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xnjp8ib7s"/>`,
		"fallback": "glyphs-poly:hand-fist",
	});
}

export default Component;
