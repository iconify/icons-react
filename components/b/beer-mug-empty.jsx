import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p02jvwbhe.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p02jvwbhe"/>`,
		"fallback": "fa7-solid:beer-mug-empty",
	});
}

export default Component;
