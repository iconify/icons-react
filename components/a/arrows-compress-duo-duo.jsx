import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wa0nbv5fg.css';
import '../../css/w/wh04f5y3h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wa0nbv5fg"/><path class="wh04f5y3h"/></g>`,
		"fallback": "glyphs:arrows-compress-duo-duo",
	});
}

export default Component;
