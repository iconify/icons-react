import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozx5o6b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozx5o6b8r"/>`,
		"fallback": "ri:cast-fill",
	});
}

export default Component;
