import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmgtk8bav.css';
import '../../css/k/k4873id8y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmgtk8bav"/><path class="k4873id8y"/>`,
		"fallback": "energy-icons:film-reel-48",
	});
}

export default Component;
