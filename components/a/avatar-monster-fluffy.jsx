import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/le2x96l2g.css';
import '../../css/w/wg9mz4blb.css';
import '../../css/o/oi7t47b8v.css';
import '../../css/a/alio6gcxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="le2x96l2g"/><path class="wg9mz4blb wm-shine"/><path class="oi7t47b8v wm-k"/><path class="alio6gcxk wm-a"/></g>`,
		"fallback": "withicons-kawaii:avatar-monster-fluffy",
	});
}

export default Component;
