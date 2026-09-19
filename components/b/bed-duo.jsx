import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nnpddxlzk.css';
import '../../css/o/ovz9-1fuz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nnpddxlzk"/><path class="ovz9-1fuz"/></g>`,
		"fallback": "glyphs:bed-duo",
	});
}

export default Component;
