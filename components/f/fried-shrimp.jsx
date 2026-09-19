import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqmw350df.css';
import '../../css/i/i4nmh97zq.css';
import '../../css/g/gy-s2wrwp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wqmw350df"/><path class="i4nmh97zq"/><path class="gy-s2wrwp"/></g>`,
		"fallback": "fluent-emoji-flat:fried-shrimp",
	});
}

export default Component;
