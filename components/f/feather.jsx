import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6fiy_b3g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6fiy_b3g"/>`,
		"fallback": "fa-solid:feather",
	});
}

export default Component;
