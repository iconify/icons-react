import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv11b6b_a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv11b6b_a"/>`,
		"fallback": "fa7-solid:hand-fist",
	});
}

export default Component;
