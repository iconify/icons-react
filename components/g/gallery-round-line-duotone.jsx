import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvjk-cbox.css';
import '../../css/b/b6-1hacff.css';
import '../../css/y/yhct11gdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xvjk-cbox"/><circle class="b6-1hacff"/><path class="yhct11gdw"/></g>`,
		"fallback": "solar:gallery-round-line-duotone",
	});
}

export default Component;
