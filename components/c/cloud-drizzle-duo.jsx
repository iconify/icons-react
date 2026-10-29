import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/foupoebia.css';
import '../../css/m/m_8l524zc.css';
import '../../css/l/lhr7mp78x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="foupoebia"/><path class="m_8l524zc wm-a"/><path class="lhr7mp78x"/></g>`,
		"fallback": "withicons:cloud-drizzle-duo",
	});
}

export default Component;
