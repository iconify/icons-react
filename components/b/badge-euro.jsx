import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/re7o3f85v.css';
import '../../css/y/yndkbgu6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="re7o3f85v"/><path class="yndkbgu6z"/></g>`,
		"fallback": "lucide:badge-euro",
	});
}

export default Component;
