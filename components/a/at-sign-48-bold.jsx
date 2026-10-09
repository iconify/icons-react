import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdaa5te7j.css';
import '../../css/j/jtlbg74id.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdaa5te7j"/><path class="jtlbg74id"/>`,
		"fallback": "energy-icons:at-sign-48-bold",
	});
}

export default Component;
