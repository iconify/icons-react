import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tnpiodj2x.css';
import '../../css/q/qa1y2vrug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="tnpiodj2x"/><path class="qa1y2vrug"/></g>`,
		"fallback": "lucide:construction",
	});
}

export default Component;
