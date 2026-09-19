import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4s0l0b0t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4s0l0b0t"/>`,
		"fallback": "icon-park-outline:christmas-tree",
	});
}

export default Component;
