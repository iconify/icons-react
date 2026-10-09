import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpeu_j1mo.css';
import '../../css/l/lyr6s0wuk.css';
import '../../css/b/by6gobvlv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpeu_j1mo"/><path class="lyr6s0wuk"/><path class="by6gobvlv"/>`,
		"fallback": "energy-icons:grant-48",
	});
}

export default Component;
