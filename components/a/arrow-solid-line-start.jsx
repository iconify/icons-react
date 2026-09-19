import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kvhy3dyow.css';
import '../../css/y/ywz-ofbgu.css';
import '../../css/c/c0gb28b5d.css';
import '../../css/g/g0lu956-m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kvhy3dyow"/><path class="ywz-ofbgu"/><path class="c0gb28b5d"/><path class="g0lu956-m"/></g>`,
		"fallback": "glyphs-poly:arrow-solid-line-start",
	});
}

export default Component;
