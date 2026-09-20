import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp7-0ubcz.css';
import '../../css/l/lxxy901ad.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp7-0ubcz"/><circle class="lxxy901ad"/>`,
		"fallback": "ooui:eye",
	});
}

export default Component;
