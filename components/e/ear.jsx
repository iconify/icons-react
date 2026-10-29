import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whudv4qtl.css';
import '../../css/g/gjtf2aciz.css';
import '../../css/a/arhlc5b6j.css';
import '../../css/y/yzwwgzbzt.css';
import '../../css/j/jh5608gim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="whudv4qtl wm-k"/><path class="gjtf2aciz wm-k"/><path class="arhlc5b6j wm-k"/><path class="wm-shine yzwwgzbzt"/><path class="jh5608gim wm-a"/></g>`,
		"fallback": "withicons-anime:ear",
	});
}

export default Component;
