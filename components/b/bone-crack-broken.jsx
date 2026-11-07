import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/omcarxbzk.css';
import '../../css/q/qa___lkpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="omcarxbzk"/><path class="qa___lkpn"/></g>`,
		"fallback": "solar:bone-crack-broken",
	});
}

export default Component;
