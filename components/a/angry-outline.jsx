import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7_sjacye.css';
import '../../css/w/wvxwsc-vy.css';
import '../../css/t/tz6wqtbza.css';
import '../../css/z/zt1e34j_a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a7_sjacye"/><path clip-rule="evenodd" class="wvxwsc-vy"/><path class="tz6wqtbza"/><path clip-rule="evenodd" class="zt1e34j_a"/></g>`,
		"fallback": "glyphs:angry-outline",
	});
}

export default Component;
