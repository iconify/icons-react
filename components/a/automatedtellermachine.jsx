import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4xf1bb5l.css';
import '../../css/r/r8hexeb-r.css';
import '../../css/p/pyldw7_dr.css';
import '../../css/u/uen4yk6_l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4xf1bb5l"/><path class="r8hexeb-r"/><path class="pyldw7_dr"/><path class="uen4yk6_l"/>`,
		"fallback": "fxemoji:automatedtellermachine",
	});
}

export default Component;
