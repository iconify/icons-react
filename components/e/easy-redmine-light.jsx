import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po3mlvuua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po3mlvuua"/>`,
		"fallback": "selfhst:easy-redmine-light",
	});
}

export default Component;
