import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q97gsbzbr.css';
import '../../css/y/y5ka71p9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q97gsbzbr"/><path class="y5ka71p9l"/></g>`,
		"fallback": "iconoir:birthday-cake",
	});
}

export default Component;
