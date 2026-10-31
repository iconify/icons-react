import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/avd3s1hni.css';
import '../../css/k/k1p42wb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="avd3s1hni"/><path class="k1p42wb5t wm-deco"/></g>`,
		"fallback": "withicons-kawaii:at-sign",
	});
}

export default Component;
