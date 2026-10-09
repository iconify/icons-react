import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z46967big.css';
import '../../css/b/b1q-bhbwi.css';
import '../../css/k/kb-04bcrr.css';
import '../../css/i/iqtvs3bwv.css';
import '../../css/o/oi83qbwgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z46967big"/><path class="b1q-bhbwi"/><path class="kb-04bcrr"/><path class="iqtvs3bwv"/><path class="oi83qbwgh"/>`,
		"fallback": "energy-icons:data-centre-cooling-48-bold",
	});
}

export default Component;
