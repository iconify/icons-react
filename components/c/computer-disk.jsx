import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wmwo1wb_o.css';
import '../../css/v/v06mojknu.css';
import '../../css/b/bm3n72bpq.css';
import '../../css/r/rzorjbbxd.css';
import '../../css/m/mfs816jce.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wmwo1wb_o"/><path class="v06mojknu"/><path class="bm3n72bpq"/><path class="rzorjbbxd"/><path class="mfs816jce"/></g>`,
		"fallback": "fluent-emoji-flat:computer-disk",
	});
}

export default Component;
