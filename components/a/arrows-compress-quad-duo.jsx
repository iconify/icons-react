import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yeik8m6jv.css';
import '../../css/o/osehe5apr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yeik8m6jv"/><path class="osehe5apr"/></g>`,
		"fallback": "glyphs:arrows-compress-quad-duo",
	});
}

export default Component;
