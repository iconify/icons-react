import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr_fj5b_h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr_fj5b_h"/>`,
		"fallback": "glyphs:club",
	});
}

export default Component;
