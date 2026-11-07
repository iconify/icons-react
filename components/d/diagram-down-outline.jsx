import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umqx0z94l.css';
import '../../css/l/ljkmqkgaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umqx0z94l"/><path class="ljkmqkgaj"/>`,
		"fallback": "solar:diagram-down-outline",
	});
}

export default Component;
