import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz0_wjbxg.css';
import '../../css/a/aeebr_bnk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz0_wjbxg"/><path class="aeebr_bnk"/>`,
		"fallback": "energy-icons:grid-network-48-bold",
	});
}

export default Component;
