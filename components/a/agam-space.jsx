import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-jjq0cjo.css';
import '../../css/v/v1usrjhaw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-jjq0cjo"/><path class="v1usrjhaw"/>`,
		"fallback": "selfhst:agam-space",
	});
}

export default Component;
