import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mscbpvyxr.css';
import '../../css/v/v31-xxb6x.css';
import '../../css/q/qzof9nhok.css';
import '../../css/u/u5j49objb.css';
import '../../css/y/ygp-2ybmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="mscbpvyxr"/><path class="v31-xxb6x wm-shine"/><path class="qzof9nhok wm-k"/><path class="u5j49objb wm-a"/><path class="wm-deco ygp-2ybmo"/></g>`,
		"fallback": "withicons-kawaii:beef",
	});
}

export default Component;
