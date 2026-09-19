import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r97i27b3o.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r97i27b3o"/>`,
		"fallback": "fa:check-circle-o",
	});
}

export default Component;
