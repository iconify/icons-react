import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayqckud7h.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayqckud7h"/>`,
		"fallback": "fa7-solid:disease",
	});
}

export default Component;
