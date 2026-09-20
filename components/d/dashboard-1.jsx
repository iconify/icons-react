import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lki0ay3vv.css';
import '../../css/k/k1jrd5_or.css';
import '../../css/d/dl35kxjwf.css';
import '../../css/e/ee-3-ybte.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="lki0ay3vv"/><path class="k1jrd5_or"/><path class="dl35kxjwf"/><path class="ee-3-ybte"/></g>`,
		"fallback": "streamline-plump-color:dashboard-1",
	});
}

export default Component;
