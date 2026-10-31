import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jbc13cctw.css';
import '../../css/z/ztxx5ubcl.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/k/k3tex3kws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jbc13cctw"/><path class="wm-shine ztxx5ubcl"/><path class="wm-k yw4fz_b6b"/><path class="k3tex3kws wm-a"/></g>`,
		"fallback": "withicons-kawaii:baseball",
	});
}

export default Component;
