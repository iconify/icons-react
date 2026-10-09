import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lezm_k3dg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lezm_k3dg"/>`,
		"fallback": "energy-icons:chevron-down-20",
	});
}

export default Component;
