import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/k/kdm6umjqd.css';
import '../../css/i/i93hdgbpx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="kdm6umjqd"/><path class="i93hdgbpx"/></g>`,
		"fallback": "doodle-icons:folder-open",
	});
}

export default Component;
