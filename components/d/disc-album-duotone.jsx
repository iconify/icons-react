import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lq4-eorjt.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/l/l3shu6b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lq4-eorjt"/><path class="s1a2eew1e"/><path class="l3shu6b_r"/></g>`,
		"fallback": "lucide-extended:disc-album-duotone",
	});
}

export default Component;
