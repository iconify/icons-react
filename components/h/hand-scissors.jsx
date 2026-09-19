import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfxii2bgk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfxii2bgk"/>`,
		"fallback": "fa6-solid:hand-scissors",
	});
}

export default Component;
