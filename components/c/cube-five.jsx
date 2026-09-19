import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3btvb10h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3btvb10h"/>`,
		"fallback": "icon-park-outline:cube-five",
	});
}

export default Component;
