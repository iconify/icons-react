import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0cf85fnp.css';
import '../../css/a/alhe85u-n.css';
import '../../css/v/v4l2w7bvt.css';
import '../../css/f/fp65xvbmh.css';
import '../../css/y/ynwnsbb0d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j0cf85fnp"/><path class="alhe85u-n"/><path class="v4l2w7bvt"/><path class="fp65xvbmh"/><path class="ynwnsbb0d"/></g>`,
		"fallback": "fluent-emoji-flat:candy",
	});
}

export default Component;
