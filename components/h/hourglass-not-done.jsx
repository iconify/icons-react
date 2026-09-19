import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rnqi1ebkv.css';
import '../../css/m/mgscpzxqf.css';
import '../../css/n/nw7yc4bui.css';
import '../../css/m/m0mx1pmph.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rnqi1ebkv"/><path class="mgscpzxqf"/><path class="nw7yc4bui"/><path class="m0mx1pmph"/></g>`,
		"fallback": "fluent-emoji-flat:hourglass-not-done",
	});
}

export default Component;
