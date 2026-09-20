import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8s5c1zub.css';
import '../../css/r/rlm82lo4o.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8s5c1zub"/><path class="rlm82lo4o"/>`,
		"fallback": "lineicons:arrow-down-circle",
	});
}

export default Component;
