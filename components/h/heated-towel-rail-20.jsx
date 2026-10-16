import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5u1h0b8u.css';
import '../../css/t/tn9n3kd1w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5u1h0b8u"/><path class="tn9n3kd1w"/>`,
		"fallback": "energy-icons:heated-towel-rail-20",
	});
}

export default Component;
