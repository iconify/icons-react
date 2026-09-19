import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmrhozbjr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmrhozbjr"/>`,
		"fallback": "cib:brand-ai",
	});
}

export default Component;
