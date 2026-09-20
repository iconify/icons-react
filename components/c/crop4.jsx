import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x1b0xhewq.css';
import '../../css/l/l5s28fb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x1b0xhewq"/><path class="l5s28fb2k"/></g>`,
		"fallback": "reicon:crop4",
	});
}

export default Component;
