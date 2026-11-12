import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chnb4jbyy.css';
import '../../css/v/vprbqcbbw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chnb4jbyy"/><path class="vprbqcbbw"/>`,
		"fallback": "selfhst:freshrss-dark",
	});
}

export default Component;
