import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5umrybpq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5umrybpq"/>`,
		"fallback": "glyphs:battery-car",
	});
}

export default Component;
