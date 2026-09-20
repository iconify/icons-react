import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_0et5b4i.css';
import '../../css/a/axk9wc20s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_0et5b4i"/><path class="axk9wc20s"/>`,
		"fallback": "streamline-pixel:health-injection",
	});
}

export default Component;
