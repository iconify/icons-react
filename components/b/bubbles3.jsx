import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz-_py4dj.css';

const viewBox = {"width":18,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz-_py4dj"/>`,
		"fallback": "icomoon-free:bubbles3",
	});
}

export default Component;
