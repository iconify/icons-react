import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e4fgyobzl.css';
import '../../css/q/qte5fcb6h.css';
import '../../css/o/ooe5hubum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e4fgyobzl"/><path class="qte5fcb6h"/><path class="ooe5hubum"/></g>`,
		"fallback": "lucide:cable",
	});
}

export default Component;
