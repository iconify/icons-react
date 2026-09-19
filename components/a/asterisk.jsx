import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlx70ub6t.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlx70ub6t"/>`,
		"fallback": "fa6-solid:asterisk",
	});
}

export default Component;
