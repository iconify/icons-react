import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0e4m_qgc.css';
import '../../css/x/xbfokwbym.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0e4m_qgc"/><path class="xbfokwbym"/>`,
		"fallback": "selfhst:acquiremock",
	});
}

export default Component;
