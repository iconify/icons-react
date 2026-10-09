import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6-6-wgev.css';
import '../../css/t/tyoqu7bub.css';
import '../../css/l/l91t7i1ff.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6-6-wgev"/><path class="tyoqu7bub"/><path class="l91t7i1ff"/>`,
		"fallback": "energy-icons:hydraulic-cylinder-20-bold",
	});
}

export default Component;
