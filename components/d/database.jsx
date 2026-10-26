import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/o/o3-avfb1e.css';
import '../../css/b/by617sf0f.css';
import '../../css/b/brdpamb6t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="o3-avfb1e"/><path class="by617sf0f"/><path class="brdpamb6t"/></g>`,
		"fallback": "doodle-icons:database",
	});
}

export default Component;
