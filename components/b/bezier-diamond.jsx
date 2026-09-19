import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9lmjhb_p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9lmjhb_p"/>`,
		"fallback": "glyphs:bezier-diamond",
	});
}

export default Component;
