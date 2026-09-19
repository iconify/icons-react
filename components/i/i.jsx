import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie_odgy3b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie_odgy3b"/>`,
		"fallback": "glyphs-poly:i",
	});
}

export default Component;
