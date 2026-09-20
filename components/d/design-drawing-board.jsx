import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i71484s2o.css';
import '../../css/y/y-_epubav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i71484s2o"/><path class="y-_epubav"/></g>`,
		"fallback": "streamline-ultimate:design-drawing-board",
	});
}

export default Component;
