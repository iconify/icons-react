import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5py72b_c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5py72b_c"/>`,
		"fallback": "ps:bull-left",
	});
}

export default Component;
