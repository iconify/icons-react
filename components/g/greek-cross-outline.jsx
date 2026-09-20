import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5hdy8lkt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5hdy8lkt"/>`,
		"fallback": "pinhead:greek-cross-outline",
	});
}

export default Component;
