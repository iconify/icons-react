import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so3tt3b9a.css';
import '../../css/y/yk8mxxbue.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so3tt3b9a"/><path class="yk8mxxbue"/>`,
		"fallback": "selfhst:frappe-gameplan",
	});
}

export default Component;
