import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m_-sf1iqy.css';
import '../../css/u/ucnsdsb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m_-sf1iqy"/><path class="ucnsdsb3u"/></g>`,
		"fallback": "reicon:arrow-left-up-duotone",
	});
}

export default Component;
