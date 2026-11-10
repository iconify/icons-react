import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/juun-ro-h.css';
import '../../css/m/mhw-f5dzn.css';
import '../../css/q/q68uhoboz.css';
import '../../css/s/se28op9xg.css';
import '../../css/i/ilqlrzb2h.css';
import '../../css/a/aujldfb5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g class="juun-ro-h"><path clip-rule="evenodd" class="mhw-f5dzn"/><path class="q68uhoboz"/></g><path class="se28op9xg"/><path class="ilqlrzb2h"/><path class="aujldfb5o"/></g>`,
		"fallback": "andrsrxn:disc-album",
	});
}

export default Component;
