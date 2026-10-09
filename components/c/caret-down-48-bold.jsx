import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk0rhabac.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk0rhabac"/>`,
		"fallback": "energy-icons:caret-down-48-bold",
	});
}

export default Component;
