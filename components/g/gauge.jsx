import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s813oxban.css';
import '../../css/t/tn4ebbbuy.css';
import '../../css/f/fq34ly3dk.css';
import '../../css/f/f4wn345na.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="s813oxban"/><path class="tn4ebbbuy wm-shine"/><path class="fq34ly3dk wm-k"/><path class="f4wn345na wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:gauge",
	});
}

export default Component;
