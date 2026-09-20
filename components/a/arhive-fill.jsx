import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5xtmfx3j.css';
import '../../css/a/aqvkcwpos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k5xtmfx3j"/><path class="aqvkcwpos"/></g>`,
		"fallback": "lets-icons:arhive-fill",
	});
}

export default Component;
