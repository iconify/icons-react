import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd_1z1b6y.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd_1z1b6y"/>`,
		"fallback": "fluent-mdl2:circle-plus",
	});
}

export default Component;
