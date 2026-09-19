import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vaa6u3b7f.css';
import '../../css/i/ichkq52fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vaa6u3b7f"/><path class="ichkq52fj"/></g>`,
		"fallback": "hugeicons:computer-dollar",
	});
}

export default Component;
