import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tt4xjd-hk.css';
import '../../css/t/t1afdnjzx.css';
import '../../css/w/w3-3et7oc.css';
import '../../css/m/m25up3bvl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tt4xjd-hk"/><path class="t1afdnjzx"/><path class="w3-3et7oc"/><path class="m25up3bvl"/></g>`,
		"fallback": "fluent-emoji-flat:diving-mask",
	});
}

export default Component;
