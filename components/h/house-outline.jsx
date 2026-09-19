import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5k9ujbll.css';
import '../../css/d/dj61l2blf.css';
import '../../css/s/s2qm3rbjc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f5k9ujbll"/><path clip-rule="evenodd" class="dj61l2blf"/><path class="s2qm3rbjc"/></g>`,
		"fallback": "glyphs:house-outline",
	});
}

export default Component;
