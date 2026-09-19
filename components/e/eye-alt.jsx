import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0u5bhb-g.css';
import '../../css/x/x5shryb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0u5bhb-g"/><path class="x5shryb9q"/>`,
		"fallback": "boxicons:eye-alt",
	});
}

export default Component;
