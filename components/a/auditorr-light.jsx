import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg1ojobpd.css';
import '../../css/t/t-uraju3l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg1ojobpd"/><path class="t-uraju3l"/>`,
		"fallback": "selfhst:auditorr-light",
	});
}

export default Component;
