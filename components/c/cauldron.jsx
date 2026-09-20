import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xtfu_dzll.css';
import '../../css/h/hzhp86xkr.css';
import '../../css/o/ou_-b_bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="xtfu_dzll"/><circle class="hzhp86xkr"/><path class="ou_-b_bfs"/></g>`,
		"fallback": "lucide-lab:cauldron",
	});
}

export default Component;
