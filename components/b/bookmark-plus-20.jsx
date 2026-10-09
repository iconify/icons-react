import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_7fyptgq.css';
import '../../css/v/v-wpb5q2n.css';
import '../../css/m/ms3vv49wg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_7fyptgq"/><path class="v-wpb5q2n"/><path class="ms3vv49wg"/>`,
		"fallback": "energy-icons:bookmark-plus-20",
	});
}

export default Component;
