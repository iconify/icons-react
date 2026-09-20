import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4yp4jbme.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4yp4jbme"/>`,
		"fallback": "qlementine-icons:fullscreen-exit-16",
	});
}

export default Component;
