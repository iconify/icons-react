import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/m/mh0ro1bvn.css';
import '../../css/b/b9my82brg.css';
import '../../css/q/q2jufojrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="mh0ro1bvn"/><path class="b9my82brg"/><path class="q2jufojrz"/></g>`,
		"fallback": "streamline-cyber:cloud-rain-1",
	});
}

export default Component;
