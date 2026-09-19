import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0qevccnb.css';
import '../../css/g/gna3v2fmo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i0qevccnb"/><path class="gna3v2fmo"/></g>`,
		"fallback": "glyphs:heart-outline",
	});
}

export default Component;
