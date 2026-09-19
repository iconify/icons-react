import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jwyv8d1su.css';
import '../../css/x/xqotela6z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jwyv8d1su"/><path class="xqotela6z"/></g>`,
		"fallback": "glyphs:bed-bunk-duo",
	});
}

export default Component;
