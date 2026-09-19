import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/echedebgr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="echedebgr"/>`,
		"fallback": "fluent-emoji-high-contrast:briefcase",
	});
}

export default Component;
