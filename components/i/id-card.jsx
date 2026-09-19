import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtaf1zbdd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtaf1zbdd"/>`,
		"fallback": "fa7-regular:id-card",
	});
}

export default Component;
