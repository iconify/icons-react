import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2x2vid8o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2x2vid8o"/>`,
		"fallback": "fluent-mdl2:indent-first-line",
	});
}

export default Component;
