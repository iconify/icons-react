import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5nl8rbtd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5nl8rbtd"/>`,
		"fallback": "energy-icons:inductor-48",
	});
}

export default Component;
