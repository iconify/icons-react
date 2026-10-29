import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uoagbxbxi.css';
import '../../css/w/wcd-ro2in.css';
import '../../css/f/fpl3r7bpk.css';
import '../../css/j/jhbzp4gwg.css';
import '../../css/v/vbz-o904u.css';
import '../../css/k/kpapad9wf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uoagbxbxi wm-k"/><path class="wcd-ro2in wm-k"/><path class="fpl3r7bpk wm-k"/><path class="jhbzp4gwg wm-k"/><path class="vbz-o904u wm-shine"/><path class="kpapad9wf wm-a"/></g>`,
		"fallback": "withicons-anime:coffin",
	});
}

export default Component;
