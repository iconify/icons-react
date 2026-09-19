import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rufo9cbyn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rufo9cbyn"/>`,
		"fallback": "fa7-solid:gauge-med",
	});
}

export default Component;
