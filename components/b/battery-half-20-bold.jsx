import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrrfucygy.css';
import '../../css/k/k_lu-3vpq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrrfucygy"/><path class="k_lu-3vpq"/>`,
		"fallback": "energy-icons:battery-half-20-bold",
	});
}

export default Component;
