import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jbc13cctw.css';
import '../../css/a/ad-x1bbwf.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/u/uu4eatbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jbc13cctw"/><path class="ad-x1bbwf wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="uu4eatbfh wm-a"/></g>`,
		"fallback": "withicons-kawaii:circle-chevron-left",
	});
}

export default Component;
