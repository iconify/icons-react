import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o72rlybrl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o72rlybrl"/>`,
		"fallback": "fa6-solid:feather-pointed",
	});
}

export default Component;
