import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faw1_xb-c.css';
import '../../css/d/dyv57sbui.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faw1_xb-c"/><path class="dyv57sbui"/>`,
		"fallback": "energy-icons:fusion-48",
	});
}

export default Component;
