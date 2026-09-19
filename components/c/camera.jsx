import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ilwk4gj4c.css';
import '../../css/w/wmw33dbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ilwk4gj4c"/><path class="wmw33dbyi"/></g>`,
		"fallback": "iconoir:camera",
	});
}

export default Component;
