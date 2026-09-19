import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it0--zbxy.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it0--zbxy"/>`,
		"fallback": "fluent-mdl2:circle-pause",
	});
}

export default Component;
