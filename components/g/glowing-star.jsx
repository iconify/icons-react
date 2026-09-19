import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-4g368hm.css';
import '../../css/s/s11f4ob4t.css';
import '../../css/e/ew4v2q7dx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y-4g368hm"><path class="s11f4ob4t"/><path class="ew4v2q7dx"/></g>`,
		"fallback": "fluent-emoji-flat:glowing-star",
	});
}

export default Component;
