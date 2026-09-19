import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/b/bmws_1bba.css';
import '../../css/b/bc020x-_d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="bmws_1bba"/><rect class="bc020x-_d"/></g>`,
		"fallback": "glyphs-poly:columns-2",
	});
}

export default Component;
