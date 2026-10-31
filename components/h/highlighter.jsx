import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wu97_izid.css';
import '../../css/m/m5wz8v1xe.css';
import '../../css/c/c32d5kb9i.css';
import '../../css/r/rmfjr9b_g.css';
import '../../css/l/lptgplb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wu97_izid"/><path class="m5wz8v1xe wm-shine"/><path class="c32d5kb9i wm-k"/><path class="rmfjr9b_g wm-a"/><path class="lptgplb-t wm-deco"/></g>`,
		"fallback": "withicons-kawaii:highlighter",
	});
}

export default Component;
