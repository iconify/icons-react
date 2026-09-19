import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9hxeub5t.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9hxeub5t"/>`,
		"fallback": "fluent-mdl2:analytics-query",
	});
}

export default Component;
