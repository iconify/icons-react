import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j14ur1b8a.css';
import '../../css/y/ybf22hb-b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j14ur1b8a"/><path class="ybf22hb-b"/>`,
		"fallback": "selfhst:counter-analytics",
	});
}

export default Component;
