import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q039x4b1z.css';
import '../../css/v/v32r9rbgo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q039x4b1z"/><path class="v32r9rbgo"/>`,
		"fallback": "icomoon-free:image",
	});
}

export default Component;
