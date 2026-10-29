import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bg3dj-bbo.css';
import '../../css/o/ohub8bxaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bg3dj-bbo"/><path class="ohub8bxaj wm-a"/></g>`,
		"fallback": "withicons:avatar-older-man",
	});
}

export default Component;
