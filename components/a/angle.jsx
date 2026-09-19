import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_n7hgyks.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_n7hgyks"/>`,
		"fallback": "glyphs-poly:angle",
	});
}

export default Component;
