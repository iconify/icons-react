import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e4vs3hbeb.css';
import '../../css/r/rgexfmujc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e4vs3hbeb"/><path class="rgexfmujc"/></g>`,
		"fallback": "streamline-ultimate:flag-plain",
	});
}

export default Component;
