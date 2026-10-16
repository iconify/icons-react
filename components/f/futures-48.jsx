import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km_1fum4q.css';
import '../../css/u/urac6lrqz.css';
import '../../css/y/yfeqx5ccz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km_1fum4q"/><path class="urac6lrqz"/><path class="yfeqx5ccz"/>`,
		"fallback": "energy-icons:futures-48",
	});
}

export default Component;
