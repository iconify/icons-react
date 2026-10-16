import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o04_3t6ej.css';
import '../../css/k/ktlm5_bld.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o04_3t6ej"/><path class="ktlm5_bld"/>`,
		"fallback": "energy-icons:current-transformer-20-bold",
	});
}

export default Component;
