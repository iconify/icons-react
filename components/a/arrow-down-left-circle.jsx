import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo0jtlb1h.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo0jtlb1h"/>`,
		"fallback": "f7:arrow-down-left-circle",
	});
}

export default Component;
