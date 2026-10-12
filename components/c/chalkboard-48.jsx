import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uku-79btt.css';
import '../../css/f/fbdvput5u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uku-79btt"/><path class="fbdvput5u"/>`,
		"fallback": "energy-icons:chalkboard-48",
	});
}

export default Component;
