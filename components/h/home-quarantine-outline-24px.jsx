import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cesd7upss.css';
import '../../css/g/g97cvbrhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cesd7upss"/><path clip-rule="evenodd" class="g97cvbrhe"/></g>`,
		"fallback": "healthicons:home-quarantine-outline-24px",
	});
}

export default Component;
