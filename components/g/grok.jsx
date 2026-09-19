import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa-klob7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b qa-klob7x"/>`,
		"fallback": "bxl:grok",
	});
}

export default Component;
