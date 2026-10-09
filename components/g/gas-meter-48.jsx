import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub1w7d4uf.css';
import '../../css/l/llee-cc9u.css';
import '../../css/x/xkf41wbfs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub1w7d4uf"/><path class="llee-cc9u"/><path class="xkf41wbfs"/>`,
		"fallback": "energy-icons:gas-meter-48",
	});
}

export default Component;
