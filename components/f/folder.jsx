import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7bywp-mn.css';

const viewBox = {"width":740,"height":800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7bywp-mn"/>`,
		"fallback": "il:folder",
	});
}

export default Component;
