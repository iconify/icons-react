import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hb2wnyo4t.css';
import '../../css/f/fagghvdpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hb2wnyo4t"/><path class="fagghvdpc"/></g>`,
		"fallback": "reicon:clock2",
	});
}

export default Component;
