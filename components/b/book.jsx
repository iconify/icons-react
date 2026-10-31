import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhlpg9bkc.css';
import '../../css/h/hct9igb0o.css';
import '../../css/l/ln504ccwh.css';
import '../../css/b/b_-kbob-o.css';
import '../../css/h/h5rptubpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rhlpg9bkc wm-k"/><path class="hct9igb0o wm-shine"/><path class="ln504ccwh wm-shine"/><path class="b_-kbob-o wm-shine"/><path class="h5rptubpv wm-shine"/></g>`,
		"fallback": "withicons-lunar:book",
	});
}

export default Component;
