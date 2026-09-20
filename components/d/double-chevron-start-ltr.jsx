import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmjdz1bia.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmjdz1bia"/>`,
		"fallback": "ooui:double-chevron-start-ltr",
	});
}

export default Component;
