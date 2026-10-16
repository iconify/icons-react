import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6ezflbgv.css';
import '../../css/r/rx83a-b1v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6ezflbgv"/><path class="rx83a-b1v"/>`,
		"fallback": "energy-icons:ear-defenders-48",
	});
}

export default Component;
