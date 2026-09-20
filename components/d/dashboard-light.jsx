import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze_7y96ni.css';
import '../../css/a/az8mb25cu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze_7y96ni"/><path class="az8mb25cu"/>`,
		"fallback": "stash:dashboard-light",
	});
}

export default Component;
