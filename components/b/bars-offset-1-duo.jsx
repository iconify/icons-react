import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfw55jhmn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfw55jhmn"/>`,
		"fallback": "glyphs:bars-offset-1-duo",
	});
}

export default Component;
