import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t7-yw95zu.css';
import '../../css/b/bkfu-xbch.css';
import '../../css/u/urapqlbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="t7-yw95zu wm-shadow"/><path class="bkfu-xbch wm-shadow"/><path class="urapqlbzl"/></g>`,
		"fallback": "withicons-brutal:align-justify",
	});
}

export default Component;
