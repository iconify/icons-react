import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4sk93ouz.css';
import '../../css/z/zqq79db7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4sk93ouz"/><path class="zqq79db7w"/>`,
		"fallback": "cil:filter-photo",
	});
}

export default Component;
