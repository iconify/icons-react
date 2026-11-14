import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mqi99kbug.css';
import '../../css/i/ib1iq7b9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mqi99kbug"/><path class="ib1iq7b9n"/></g>`,
		"fallback": "hugeicons:ai-dna",
	});
}

export default Component;
