import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h9ftggbhd.css';
import '../../css/k/ks322wezq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h9ftggbhd"/><path class="ks322wezq"/></g>`,
		"fallback": "glyphs:archive-duo",
	});
}

export default Component;
