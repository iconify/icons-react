import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0t27q5qu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0t27q5qu"/>`,
		"fallback": "fluent-mdl2:collapse-content-single",
	});
}

export default Component;
