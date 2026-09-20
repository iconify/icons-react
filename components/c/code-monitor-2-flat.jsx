import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gh983_bcz.css';
import '../../css/k/k3716562u.css';
import '../../css/y/y2zhlbblz.css';
import '../../css/u/ue4pxr0jz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gh983_bcz"/><path clip-rule="evenodd" class="k3716562u"/><path class="y2zhlbblz"/><path class="ue4pxr0jz"/></g>`,
		"fallback": "streamline-color:code-monitor-2-flat",
	});
}

export default Component;
