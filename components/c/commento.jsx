import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kog5zicjb.css';
import '../../css/y/y02bymb-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="kog5zicjb"/><path class="y02bymb-z"/>`,
		"fallback": "selfhst:commento",
	});
}

export default Component;
