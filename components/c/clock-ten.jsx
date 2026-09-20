import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrxlgg64z.css';
import '../../css/d/d9g_0nbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hrxlgg64z"/><path class="d9g_0nbig"/>`,
		"fallback": "uim:clock-ten",
	});
}

export default Component;
