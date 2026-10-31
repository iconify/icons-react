import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vd-2g6p7l.css';
import '../../css/v/vt03ojb4o.css';
import '../../css/c/cyjcm_jmo.css';
import '../../css/x/xrbr28n_e.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="vd-2g6p7l"/><path class="vt03ojb4o"/><path class="cyjcm_jmo wm-shine"/><path class="xrbr28n_e"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:bold",
	});
}

export default Component;
