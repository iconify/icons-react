import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3lgamtva.css';

const viewBox = {"width":1024,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3lgamtva"/>`,
		"fallback": "whh:chair",
	});
}

export default Component;
