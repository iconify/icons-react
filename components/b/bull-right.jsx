import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5-6cbb1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5-6cbb1d"/>`,
		"fallback": "ps:bull-right",
	});
}

export default Component;
