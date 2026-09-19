import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cesd7upss.css';
import '../../css/m/m5xutvb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cesd7upss"/><path clip-rule="evenodd" class="m5xutvb3v"/></g>`,
		"fallback": "healthicons:home-quarantine-24px",
	});
}

export default Component;
