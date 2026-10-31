import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/goy_4nffs.css';
import '../../css/z/z7zr1slfh.css';
import '../../css/n/njsyqb-ly.css';
import '../../css/g/g8_iol2hx.css';
import '../../css/m/m1wyev29g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="goy_4nffs"/><path class="wm-shine z7zr1slfh"/><path class="njsyqb-ly wm-k"/><path class="g8_iol2hx wm-a"/><path class="m1wyev29g wm-deco"/></g>`,
		"fallback": "withicons-kawaii:binoculars",
	});
}

export default Component;
