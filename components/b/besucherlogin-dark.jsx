import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygf72t4qt.css';
import '../../css/o/o74utibot.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygf72t4qt"/><rect class="o74utibot"/>`,
		"fallback": "selfhst:besucherlogin-dark",
	});
}

export default Component;
