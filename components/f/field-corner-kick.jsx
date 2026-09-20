import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/y/yhoot5nfl.css';
import '../../css/v/vjndd9bzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="yhoot5nfl"/><path class="vjndd9bzl"/></g>`,
		"fallback": "streamline-ultimate:field-corner-kick",
	});
}

export default Component;
