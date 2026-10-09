import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp6stzr0z.css';
import '../../css/r/r8mpjxb7m.css';
import '../../css/l/ltpo7s9_n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp6stzr0z"/><path class="r8mpjxb7m"/><path class="ltpo7s9_n"/>`,
		"fallback": "energy-icons:feed-in-20-bold",
	});
}

export default Component;
