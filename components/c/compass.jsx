import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n391m53ga.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n391m53ga"/>`,
		"fallback": "ps:compass",
	});
}

export default Component;
