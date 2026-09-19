import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfm84o1-m.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfm84o1-m"/>`,
		"fallback": "fa-regular:hourglass",
	});
}

export default Component;
