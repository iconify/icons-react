import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0v50k2an.css';
import '../../css/x/xwaa6bbbm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0v50k2an"/><path class="xwaa6bbbm"/>`,
		"fallback": "energy-icons:cable-lock-48-bold",
	});
}

export default Component;
