import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut7pyrqfx.css';
import '../../css/z/zsi22_bxh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut7pyrqfx"/><path class="zsi22_bxh"/>`,
		"fallback": "selfhst:blinko",
	});
}

export default Component;
