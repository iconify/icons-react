import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bgb26ij_h.css';
import '../../css/o/obpf2tbvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bgb26ij_h"/><path class="obpf2tbvs"/></g>`,
		"fallback": "streamline-sharp:drone",
	});
}

export default Component;
