import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tm5mzib6s.css';
import '../../css/g/ge30fj9tu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tm5mzib6s"/><path class="ge30fj9tu"/></g>`,
		"fallback": "hugeicons:chart-radar",
	});
}

export default Component;
