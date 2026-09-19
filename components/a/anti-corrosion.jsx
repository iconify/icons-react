import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cver7vrvq.css';
import '../../css/k/kg5gs7f3t.css';
import '../../css/c/cfndtybtc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cver7vrvq"/><path class="kg5gs7f3t"/><path class="cfndtybtc"/></g>`,
		"fallback": "icon-park-outline:anti-corrosion",
	});
}

export default Component;
