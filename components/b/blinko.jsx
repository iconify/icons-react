import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1rs_hvhx.css';
import '../../css/z/zsi22_bxh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1rs_hvhx"/><path class="zsi22_bxh"/>`,
		"fallback": "selfhst:blinko",
	});
}

export default Component;
