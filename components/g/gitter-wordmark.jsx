import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e37-job9h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e37-job9h"/>`,
		"fallback": "devicon-plain:gitter-wordmark",
	});
}

export default Component;
