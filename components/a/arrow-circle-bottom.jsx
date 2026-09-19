import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6q-f6bnh.css';
import '../../css/m/m2i_l4b6i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6q-f6bnh"/><path class="m2i_l4b6i"/>`,
		"fallback": "cil:arrow-circle-bottom",
	});
}

export default Component;
