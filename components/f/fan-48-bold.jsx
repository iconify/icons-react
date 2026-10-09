import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl4xncchh.css';
import '../../css/q/qbfpednqz.css';
import '../../css/q/qewmfcczo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl4xncchh"/><path class="qbfpednqz"/><path class="qewmfcczo"/>`,
		"fallback": "energy-icons:fan-48-bold",
	});
}

export default Component;
