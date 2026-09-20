import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ic6bumz1t.css';
import '../../css/n/nuz9zpbsf.css';
import '../../css/j/jy60lc3rx.css';
import '../../css/i/i-sq6rbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ic6bumz1t"/><path class="nuz9zpbsf"/><path class="jy60lc3rx"/><path class="i-sq6rbtl"/></g>`,
		"fallback": "streamline-ultimate-color:graph-stats-circle",
	});
}

export default Component;
