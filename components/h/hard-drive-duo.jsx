import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zlwo8vk7z.css';
import '../../css/k/km9xt0bvl.css';
import '../../css/c/c-n-9gpof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zlwo8vk7z"/><path class="km9xt0bvl wm-a"/><path class="c-n-9gpof"/></g>`,
		"fallback": "withicons:hard-drive-duo",
	});
}

export default Component;
