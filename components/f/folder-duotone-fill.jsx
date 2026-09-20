import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf5a1pvvg.css';
import '../../css/k/kgk49pb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf5a1pvvg"/><path class="kgk49pb0h"/>`,
		"fallback": "lets-icons:folder-duotone-fill",
	});
}

export default Component;
