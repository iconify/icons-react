import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b73g4x-ms.css';
import '../../css/v/v8ghhzb6u.css';
import '../../css/c/cuc5u4bhr.css';
import '../../css/t/tl_heabyr.css';
import '../../css/o/oe707sb3m.css';
import '../../css/x/xq0un1dvd.css';
import '../../css/r/rfgq-j9ry.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b73g4x-ms"/><path class="v8ghhzb6u"/><path class="cuc5u4bhr"/><path class="tl_heabyr"/><path class="oe707sb3m"/><path class="xq0un1dvd"/><path class="rfgq-j9ry"/>`,
		"fallback": "fxemoji:custard",
	});
}

export default Component;
