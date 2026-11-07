import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr3dwwbcg.css';
import '../../css/k/ki68ofbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr3dwwbcg"/><path class="ki68ofbgn"/>`,
		"fallback": "solar:filter-close-bold-duotone",
	});
}

export default Component;
