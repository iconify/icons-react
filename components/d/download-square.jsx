import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/yj0jynlgh.css';
import '../../css/m/m_-7htfhf.css';
import '../../css/j/j_37aeerp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="yj0jynlgh"/><path class="m_-7htfhf"/><path class="j_37aeerp"/></g>`,
		"fallback": "streamline-sharp-color:download-square",
	});
}

export default Component;
