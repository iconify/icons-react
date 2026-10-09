import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwuvbdcau.css';
import '../../css/y/yow8pow4g.css';
import '../../css/t/tgtgovnso.css';
import '../../css/b/b0mt28bvo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwuvbdcau"/><path class="yow8pow4g"/><path class="tgtgovnso"/><path class="b0mt28bvo"/>`,
		"fallback": "energy-icons:cottage-20",
	});
}

export default Component;
