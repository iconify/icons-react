import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb4fn3bdi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb4fn3bdi"/>`,
		"fallback": "icon-park-outline:heart-ballon",
	});
}

export default Component;
