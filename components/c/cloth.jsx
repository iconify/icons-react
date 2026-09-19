import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd-_1dbee.css';
import '../../css/b/b9s2v5y7q.css';
import '../../css/p/pvjzk9b8i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd-_1dbee"/><path class="b9s2v5y7q"/><path class="pvjzk9b8i"/>`,
		"fallback": "flat-color-icons:cloth",
	});
}

export default Component;
