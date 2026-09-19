import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng3k04byj.css';

const viewBox = {"width":1408,"height":1632};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng3k04byj"/>`,
		"fallback": "fa:fire-extinguisher",
	});
}

export default Component;
