import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo-j068ov.css';
import '../../css/c/cujh-cb3j.css';
import '../../css/z/zj9g_cb3z.css';
import '../../css/q/qi6-mdk2j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo-j068ov"/><path class="cujh-cb3j"/><path class="zj9g_cb3z"/><path class="qi6-mdk2j"/>`,
		"fallback": "fxemoji:airplane",
	});
}

export default Component;
