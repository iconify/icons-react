import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0l2657de.css';
import '../../css/c/c6cz_y-yn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0l2657de"/><path class="c6cz_y-yn"/>`,
		"fallback": "flat-color-icons:folder",
	});
}

export default Component;
