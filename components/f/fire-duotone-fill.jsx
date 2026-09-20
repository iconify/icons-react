import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/voeepub9z.css';
import '../../css/i/ig-0gpp7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="voeepub9z"/><path class="ig-0gpp7q"/></g>`,
		"fallback": "lets-icons:fire-duotone-fill",
	});
}

export default Component;
