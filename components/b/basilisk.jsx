import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy0l2_f2n.css';
import '../../css/o/oy_dogbda.css';
import '../../css/t/tvs8cjp-l.css';
import '../../css/a/ar4rr2hua.css';

const viewBox = {"width":3310,"height":3310};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jy0l2_f2n"><circle class="oy_dogbda"/><ellipse class="tvs8cjp-l"/><path class="ar4rr2hua"/></g>`,
		"fallback": "thesvg-color:basilisk",
	});
}

export default Component;
