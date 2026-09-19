import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx2qjgbvh.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx2qjgbvh"/>`,
		"fallback": "whh:csharp",
	});
}

export default Component;
