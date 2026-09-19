import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leyai0bbf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leyai0bbf"/>`,
		"fallback": "icon-park-outline:hamburger-button",
	});
}

export default Component;
