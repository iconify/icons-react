import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/on-iwezdh.css';
import '../../css/k/kw7_lt1xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="on-iwezdh"/><path class="kw7_lt1xk"/></g>`,
		"fallback": "keyline-icons:git-join-sharp-fill",
	});
}

export default Component;
