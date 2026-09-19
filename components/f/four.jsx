import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhc0zl4zk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhc0zl4zk"/>`,
		"fallback": "icon-park-outline:four",
	});
}

export default Component;
