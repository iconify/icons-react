import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/dl_ofsy9w.css';
import '../../css/s/sjb29en2p.css';
import '../../css/p/pytt3n7gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="dl_ofsy9w"/><path class="sjb29en2p"/><path class="pytt3n7gc"/></g>`,
		"fallback": "iconamoon:discount",
	});
}

export default Component;
