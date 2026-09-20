import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjmd6lg4e.css';
import '../../css/w/wbfmzue4k.css';
import '../../css/x/xfdvzbb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rjmd6lg4e"/><path class="wbfmzue4k"/><path class="xfdvzbb0y"/></g>`,
		"fallback": "streamline-ultimate:compass-1",
	});
}

export default Component;
