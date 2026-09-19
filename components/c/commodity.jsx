import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/m/m_76ovury.css';
import '../../css/m/m2gapsgxr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="m_76ovury"/><path class="m2gapsgxr"/></g>`,
		"fallback": "icon-park:commodity",
	});
}

export default Component;
