import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py8pa3bbm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py8pa3bbm"/>`,
		"fallback": "icon-park-outline:arrow-right-up",
	});
}

export default Component;
