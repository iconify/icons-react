import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qepj9eb6s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qepj9eb6s"/>`,
		"fallback": "zondicons:inbox-check",
	});
}

export default Component;
