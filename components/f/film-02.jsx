import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z-v_75aru.css';
import '../../css/s/se4288pwr.css';
import '../../css/a/avlqa8bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z-v_75aru"/><path class="se4288pwr"/><path class="avlqa8bvr"/></g>`,
		"fallback": "hugeicons:film-02",
	});
}

export default Component;
