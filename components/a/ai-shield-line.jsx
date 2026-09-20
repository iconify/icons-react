import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/m/m_wng7bri.css';
import '../../css/l/lt2add1gd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="m_wng7bri"/><path class="lt2add1gd"/></g>`,
		"fallback": "si:ai-shield-line",
	});
}

export default Component;
