import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6sgv5b8x.css';
import '../../css/f/fuox2trau.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n6sgv5b8x"/><path class="fuox2trau"/></g>`,
		"fallback": "glyphs:hotel-duo",
	});
}

export default Component;
