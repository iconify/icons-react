import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ary60mj0w.css';
import '../../css/p/pm4uhbk1b.css';
import '../../css/j/j14em3y7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ary60mj0w"/><path class="pm4uhbk1b"/><path class="j14em3y7c"/>`,
		"fallback": "lucide-extended:cloud-snow-filled",
	});
}

export default Component;
