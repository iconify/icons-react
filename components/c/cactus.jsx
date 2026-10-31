import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z76l7yb_l.css';
import '../../css/i/iwhaml25c.css';
import '../../css/l/lrliqtbvo.css';
import '../../css/j/jzul1pbjt.css';
import '../../css/h/hb57eibkn.css';
import '../../css/y/yv6o9ub8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="z76l7yb_l"/><path class="iwhaml25c wm-shine"/><path class="lrliqtbvo wm-k"/><path class="jzul1pbjt wm-a"/><path class="hb57eibkn"/><path class="yv6o9ub8e"/></g>`,
		"fallback": "withicons-kawaii:cactus",
	});
}

export default Component;
