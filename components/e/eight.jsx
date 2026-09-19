import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqqlw_b6l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqqlw_b6l"/>`,
		"fallback": "glyphs-poly:eight",
	});
}

export default Component;
