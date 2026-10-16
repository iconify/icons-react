import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b63t5_b0n.css';
import '../../css/u/ufacyhbgw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b63t5_b0n"/><path class="ufacyhbgw"/>`,
		"fallback": "energy-icons:dosimeter-20-bold",
	});
}

export default Component;
