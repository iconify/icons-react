import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehv5ztb4q.css';
import '../../css/i/ijrr7tsvq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehv5ztb4q"/><path class="ijrr7tsvq"/>`,
		"fallback": "energy-icons:corner-left-down-20-bold",
	});
}

export default Component;
