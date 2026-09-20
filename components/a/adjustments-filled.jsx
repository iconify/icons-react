import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epls_7bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epls_7bjs"/>`,
		"fallback": "tabler:adjustments-filled",
	});
}

export default Component;
