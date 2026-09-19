import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfz99bcbs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfz99bcbs"/>`,
		"fallback": "fluent-emoji-high-contrast:duck",
	});
}

export default Component;
