import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w8iuj2y-t.css';
import '../../css/w/w2s6u21mt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w8iuj2y-t"/><path class="w2s6u21mt"/></g>`,
		"fallback": "reicon:bag2",
	});
}

export default Component;
