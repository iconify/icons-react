import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7o1r-80a.css';
import '../../css/a/ah0ch-vyf.css';
import '../../css/q/q_yh57bfs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7o1r-80a"/><path class="ah0ch-vyf"/><path class="q_yh57bfs"/>`,
		"fallback": "energy-icons:demand-response-20",
	});
}

export default Component;
