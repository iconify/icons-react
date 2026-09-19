import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khxma8kyi.css';
import '../../css/h/hsdwt973y.css';
import '../../css/s/stgidx8-i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="khxma8kyi"/><path clip-rule="evenodd" class="hsdwt973y"/><path clip-rule="evenodd" class="stgidx8-i"/></g>`,
		"fallback": "glyphs-poly:basketball",
	});
}

export default Component;
