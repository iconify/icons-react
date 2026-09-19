import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9orhby8t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9orhby8t"/>`,
		"fallback": "fa7-regular:circle-up",
	});
}

export default Component;
