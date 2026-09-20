import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-dj6j5tb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-dj6j5tb"/>`,
		"fallback": "streamline-flex:cloud-warning-solid",
	});
}

export default Component;
