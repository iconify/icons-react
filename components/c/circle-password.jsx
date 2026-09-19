import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r9ixvp21u.css';
import '../../css/u/ugapgbm-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r9ixvp21u"/><path class="ugapgbm-u"/></g>`,
		"fallback": "hugeicons:circle-password",
	});
}

export default Component;
