import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q20bw1aly.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q20bw1aly"/>`,
		"fallback": "fluent-mdl2:go",
	});
}

export default Component;
