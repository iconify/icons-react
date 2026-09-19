import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gmal50bys.css';
import '../../css/m/m_v4gut-x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gmal50bys"/><path class="m_v4gut-x"/></g>`,
		"fallback": "healthicons:heart-organ",
	});
}

export default Component;
