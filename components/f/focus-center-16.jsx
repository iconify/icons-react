import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylhdevp5c.css';
import '../../css/v/v-gec3bcs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylhdevp5c"/><path class="v-gec3bcs"/>`,
		"fallback": "octicon:focus-center-16",
	});
}

export default Component;
