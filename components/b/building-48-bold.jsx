import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwzk_6p2e.css';
import '../../css/u/uy6zwjbkh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwzk_6p2e"/><path class="uy6zwjbkh"/>`,
		"fallback": "energy-icons:building-48-bold",
	});
}

export default Component;
