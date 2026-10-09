import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9czz4bal.css';
import '../../css/l/laagh_b7q.css';
import '../../css/q/q1ee2b8fe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9czz4bal"/><path class="laagh_b7q"/><path class="q1ee2b8fe"/>`,
		"fallback": "energy-icons:house-plug-48",
	});
}

export default Component;
