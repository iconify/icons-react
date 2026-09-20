import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyb-4acmo.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyb-4acmo"/>`,
		"fallback": "lineicons:arrow-left",
	});
}

export default Component;
