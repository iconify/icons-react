import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oora6eb1h.css';
import '../../css/l/l0_kzwbct.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oora6eb1h"/><path class="l0_kzwbct"/>`,
		"fallback": "energy-icons:bag-20",
	});
}

export default Component;
