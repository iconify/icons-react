import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kcbyuzz0y.css';
import '../../css/w/wa-9q9bbe.css';
import '../../css/g/g4_grlbnu.css';
import '../../css/r/rj34iob0h.css';
import '../../css/h/h23oxgbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kcbyuzz0y"/><path class="wa-9q9bbe"/><path class="g4_grlbnu"/><path class="rj34iob0h"/><path class="h23oxgbih"/></g>`,
		"fallback": "hugeicons:forklift",
	});
}

export default Component;
