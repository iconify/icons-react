import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0ryvgb7l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0ryvgb7l"/>`,
		"fallback": "glyphs:hand-peace-duo",
	});
}

export default Component;
