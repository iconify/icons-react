import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmsizop1w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmsizop1w"/>`,
		"fallback": "glyphs:e",
	});
}

export default Component;
