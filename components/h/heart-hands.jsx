import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwhb--87a.css';
import '../../css/b/bbbbm0bzn.css';
import '../../css/w/wy1t15iak.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qwhb--87a"/><path clip-rule="evenodd" class="bbbbm0bzn"/><path class="wy1t15iak"/></g>`,
		"fallback": "fluent-emoji-flat:heart-hands",
	});
}

export default Component;
