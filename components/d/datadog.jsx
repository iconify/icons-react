import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjm6t_b4m.css';

const viewBox = {"width":256,"height":274};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tjm6t_b4m"/>`,
		"fallback": "thesvg-color:datadog",
	});
}

export default Component;
