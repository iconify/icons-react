import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waw60ab1f.css';
import '../../css/c/cd-eh4cev.css';
import '../../css/b/b50gwx6hj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waw60ab1f"/><path class="cd-eh4cev"/><path class="b50gwx6hj"/>`,
		"fallback": "energy-icons:heat-exchanger-48",
	});
}

export default Component;
