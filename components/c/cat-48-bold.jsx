import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk_lpbr1e.css';
import '../../css/c/cmf_awb5e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk_lpbr1e"/><path class="cmf_awb5e"/>`,
		"fallback": "energy-icons:cat-48-bold",
	});
}

export default Component;
