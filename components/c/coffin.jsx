import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ipva-ybxm.css';
import '../../css/t/t2zlwccha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ipva-ybxm"/><path class="t2zlwccha wm-a"/></g>`,
		"fallback": "withicons:coffin",
	});
}

export default Component;
