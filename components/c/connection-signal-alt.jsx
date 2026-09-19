import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd5t47bei.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd5t47bei"/>`,
		"fallback": "carbon:connection-signal-alt",
	});
}

export default Component;
