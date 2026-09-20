import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d1rl93c2g.css';
import '../../css/a/a171m_bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d1rl93c2g"/><path class="a171m_bbe"/></g>`,
		"fallback": "lucide:cloud-download",
	});
}

export default Component;
