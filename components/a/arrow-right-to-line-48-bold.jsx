import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8_-mvbmk.css';
import '../../css/n/n5nqfww4w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8_-mvbmk"/><path class="n5nqfww4w"/>`,
		"fallback": "energy-icons:arrow-right-to-line-48-bold",
	});
}

export default Component;
