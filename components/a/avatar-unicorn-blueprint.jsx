import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/ftqr-5k8n.css';
import '../../css/o/on7c82d3r.css';
import '../../css/c/c95t1mbzm.css';
import '../../css/v/v8-uzepcp.css';
import '../../css/y/y87qwabfm.css';
import '../../css/b/bclphnb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ftqr-5k8n wm-deco"/><path class="on7c82d3r wm-deco"/><path class="c95t1mbzm wm-deco"/><path class="v8-uzepcp"/><path class="y87qwabfm"/><path class="bclphnb4u"/></g>`,
		"fallback": "withicons:avatar-unicorn-blueprint",
	});
}

export default Component;
