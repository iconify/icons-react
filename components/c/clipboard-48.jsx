import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-s18fbbr.css';
import '../../css/p/p0vii7b4e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-s18fbbr"/><path class="p0vii7b4e"/>`,
		"fallback": "energy-icons:clipboard-48",
	});
}

export default Component;
