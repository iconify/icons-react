import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ak99b7bpx.css';
import '../../css/w/wstwwib_m.css';
import '../../css/t/t65iejbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ak99b7bpx"/><path class="wstwwib_m"/><path class="t65iejbne"/></g>`,
		"fallback": "hugeicons:hdd",
	});
}

export default Component;
