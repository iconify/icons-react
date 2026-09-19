import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-ow4s4hw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-ow4s4hw"/>`,
		"fallback": "glyphs:h-2-duo",
	});
}

export default Component;
