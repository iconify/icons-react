import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rww3tmbwl.css';
import '../../css/g/gnirhxbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rww3tmbwl"/><path class="gnirhxbfm"/></g>`,
		"fallback": "hugeicons:airpod-02",
	});
}

export default Component;
