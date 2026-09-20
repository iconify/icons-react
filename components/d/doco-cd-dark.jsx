import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkd14r_yn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkd14r_yn"/>`,
		"fallback": "selfhst:doco-cd-dark",
	});
}

export default Component;
