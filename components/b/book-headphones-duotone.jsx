import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fnwqvcbpt.css';
import '../../css/s/ssh18kvpm.css';
import '../../css/g/g1_ffnpua.css';
import '../../css/x/xxbbvx_gg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fnwqvcbpt"/><path class="ssh18kvpm"/><path class="g1_ffnpua"/><path class="xxbbvx_gg"/></g>`,
		"fallback": "lucide-extended:book-headphones-duotone",
	});
}

export default Component;
