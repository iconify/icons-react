import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncjlt0bzz.css';
import '../../css/r/rvuq3ibhd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncjlt0bzz"/><path class="rvuq3ibhd"/>`,
		"fallback": "energy-icons:dollar-20",
	});
}

export default Component;
