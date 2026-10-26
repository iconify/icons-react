import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2q0x1bgc.css';
import '../../css/m/mw0gdnbgu.css';
import '../../css/e/eg_awvb4a.css';

const viewBox = {"width":360,"height":360};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2q0x1bgc"/><path class="mw0gdnbgu"/><path class="eg_awvb4a"/>`,
		"fallback": "thesvg:contour",
	});
}

export default Component;
