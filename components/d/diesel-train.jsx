import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb-3e1u7h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb-3e1u7h"/>`,
		"fallback": "pinhead:diesel-train",
	});
}

export default Component;
