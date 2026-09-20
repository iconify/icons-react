import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2_v7mbej.css';
import '../../css/c/c2qxqnb8p.css';
import '../../css/h/h6l-atboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2_v7mbej"/><path class="c2qxqnb8p"/><rect class="h6l-atboe"/>`,
		"fallback": "lets-icons:home-duotone",
	});
}

export default Component;
