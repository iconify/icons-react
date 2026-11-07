import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb1w2tbur.css';
import '../../css/e/ejx2y1bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nb1w2tbur"/><path class="ejx2y1bzf"/>`,
		"fallback": "solar:cloud-snowfall-bold-duotone",
	});
}

export default Component;
