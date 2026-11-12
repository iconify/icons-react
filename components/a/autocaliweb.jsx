import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaqgtyjjh.css';
import '../../css/c/cr2fezr1m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaqgtyjjh"/><path class="cr2fezr1m"/>`,
		"fallback": "selfhst:autocaliweb",
	});
}

export default Component;
