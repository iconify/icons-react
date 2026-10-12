import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8jt_mb0e.css';
import '../../css/k/kga35kgyc.css';
import '../../css/z/z5kh--bts.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8jt_mb0e"/><path class="kga35kgyc"/><path class="z5kh--bts"/>`,
		"fallback": "energy-icons:abacus-48",
	});
}

export default Component;
