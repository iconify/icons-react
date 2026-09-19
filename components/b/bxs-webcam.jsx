import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm4caib6z.css';
import '../../css/k/k7mhgvbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm4caib6z"/><path class="k7mhgvbuv"/>`,
		"fallback": "bx:bxs-webcam",
	});
}

export default Component;
