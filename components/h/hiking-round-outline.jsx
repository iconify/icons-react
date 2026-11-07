import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2c1ynjwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c2c1ynjwd"/>`,
		"fallback": "solar:hiking-round-outline",
	});
}

export default Component;
