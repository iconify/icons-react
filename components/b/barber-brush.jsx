import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg2jepl7q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg2jepl7q"/>`,
		"fallback": "icon-park-outline:barber-brush",
	});
}

export default Component;
