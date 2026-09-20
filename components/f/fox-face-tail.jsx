import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c790lx7ct.css';
import '../../css/p/ptuaszb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c790lx7ct"/><path class="ptuaszb3w"/></g>`,
		"fallback": "lucide-lab:fox-face-tail",
	});
}

export default Component;
