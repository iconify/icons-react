import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u-wlnbb3d.css';
import '../../css/x/xnajft-bs.css';
import '../../css/o/oq6lswlfo.css';
import '../../css/p/pxaww4b9h.css';
import '../../css/w/w6_bkqfhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u-wlnbb3d"/><circle class="xnajft-bs"/><path class="oq6lswlfo"/><circle class="pxaww4b9h"/><path class="w6_bkqfhr"/></g>`,
		"fallback": "lucide-lab:case-snake",
	});
}

export default Component;
