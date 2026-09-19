import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z14k1koii.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z14k1koii"/>`,
		"fallback": "fa7-solid:arrow-up-from-ground-water",
	});
}

export default Component;
