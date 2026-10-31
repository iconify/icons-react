import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ec8z8-m7f.css';
import '../../css/h/h19w7ub6m.css';
import '../../css/m/mlg101b4p.css';
import '../../css/o/olf4p6bda.css';
import '../../css/c/cf0edfbjg.css';
import '../../css/q/q9-xrfo2a.css';
import '../../css/y/yc2x4mbho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ec8z8-m7f wm-shadow"/><path class="h19w7ub6m wm-s"/><path class="mlg101b4p wm-shadow"/><path class="olf4p6bda"/><path class="cf0edfbjg"/><path class="q9-xrfo2a wm-s"/><path class="wm-s yc2x4mbho"/></g>`,
		"fallback": "withicons-brutal:bomb",
	});
}

export default Component;
