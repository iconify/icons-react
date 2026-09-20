import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b0nahy8lo.css';
import '../../css/e/ef4m_te8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b0nahy8lo"/><path class="ef4m_te8m"/></g>`,
		"fallback": "keyline-icons:arrow-down-left-dashed-panel-duotone",
	});
}

export default Component;
