import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2s5ueg_q.css';
import '../../css/v/vm8t9uryo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2s5ueg_q"/><path class="vm8t9uryo"/>`,
		"fallback": "energy-icons:dog-20",
	});
}

export default Component;
