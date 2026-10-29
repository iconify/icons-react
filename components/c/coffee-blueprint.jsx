import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/ac9c3ps5r.css';
import '../../css/y/y9r9nob0o.css';
import '../../css/u/uw31rn9nj.css';
import '../../css/s/sb709br1i.css';
import '../../css/g/g9g2iobxb.css';
import '../../css/s/s0fm9wbsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ac9c3ps5r wm-deco"/><path class="wm-deco y9r9nob0o"/><path class="uw31rn9nj wm-deco"/><path class="sb709br1i wm-k"/><path class="g9g2iobxb wm-a"/><path class="s0fm9wbsl wm-k"/></g>`,
		"fallback": "withicons:coffee-blueprint",
	});
}

export default Component;
