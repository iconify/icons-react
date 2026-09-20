import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xo5mc1bqc.css';
import '../../css/y/ygnab28px.css';
import '../../css/m/ml8inoh2i.css';
import '../../css/x/xuj16dbxi.css';
import '../../css/a/akm810o-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xo5mc1bqc"/><path class="ygnab28px"/><path class="ml8inoh2i"/><path class="xuj16dbxi"/><path class="akm810o-e"/></g>`,
		"fallback": "lucide:hop-off",
	});
}

export default Component;
