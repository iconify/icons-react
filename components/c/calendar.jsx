import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rokj4hbjc.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rokj4hbjc"/>`,
		"fallback": "vs:calendar",
	});
}

export default Component;
