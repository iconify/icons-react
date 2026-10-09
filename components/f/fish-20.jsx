import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3m6qu31q.css';
import '../../css/q/qe6mnv44d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3m6qu31q"/><path class="qe6mnv44d"/>`,
		"fallback": "energy-icons:fish-20",
	});
}

export default Component;
