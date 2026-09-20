import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_yur1g1e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_yur1g1e"/>`,
		"fallback": "selfhst:cliparr",
	});
}

export default Component;
