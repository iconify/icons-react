import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt--b6bfc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt--b6bfc"/>`,
		"fallback": "icon-park-outline:done-all",
	});
}

export default Component;
