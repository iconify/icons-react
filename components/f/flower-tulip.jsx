import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y29zj0kgy.css';
import '../../css/w/wlsuajbmd.css';
import '../../css/e/evx30ej3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y29zj0kgy"/><path class="wlsuajbmd"/><path class="evx30ej3i"/></g>`,
		"fallback": "lucide-lab:flower-tulip",
	});
}

export default Component;
