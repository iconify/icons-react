import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uotfaqh-j.css';
import '../../css/x/x-cgasewb.css';
import '../../css/z/z86wj-6ot.css';
import '../../css/r/rpxw3px3z.css';
import '../../css/w/wwpcapzcc.css';
import '../../css/o/ooip3acqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="uotfaqh-j wm-shadow"/><path class="wm-shadow x-cgasewb"/><path class="z86wj-6ot"/><path class="rpxw3px3z"/><path class="wwpcapzcc"/><path class="ooip3acqj"/></g>`,
		"fallback": "withicons-brutal:binoculars",
	});
}

export default Component;
