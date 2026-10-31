import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qncki40xj.css';
import '../../css/h/hdwe806as.css';
import '../../css/p/pdpacf2rz.css';
import '../../css/n/n_fnwkbmt.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qncki40xj"/><path class="hdwe806as"/><path class="pdpacf2rz wm-k"/><path class="n_fnwkbmt wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:christmas-tree",
	});
}

export default Component;
