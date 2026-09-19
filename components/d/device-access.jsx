import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/itgtwu-3t.css';
import '../../css/z/z7ido4o6s.css';
import '../../css/f/f7lvwj05b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="itgtwu-3t"/><path class="z7ido4o6s"/><path class="f7lvwj05b"/></g>`,
		"fallback": "hugeicons:device-access",
	});
}

export default Component;
