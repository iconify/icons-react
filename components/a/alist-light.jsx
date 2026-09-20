import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esr320baw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esr320baw"/>`,
		"fallback": "selfhst:alist-light",
	});
}

export default Component;
