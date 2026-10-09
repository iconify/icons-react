import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8l_jsz-q.css';
import '../../css/r/rodd6kbsx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8l_jsz-q"/><path class="rodd6kbsx"/>`,
		"fallback": "energy-icons:flag-48-bold",
	});
}

export default Component;
