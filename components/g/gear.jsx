import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb_0-umdw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb_0-umdw"/>`,
		"fallback": "raphael:gear",
	});
}

export default Component;
