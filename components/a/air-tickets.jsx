import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6m7mzbkt.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6m7mzbkt"/>`,
		"fallback": "fluent-mdl2:air-tickets",
	});
}

export default Component;
