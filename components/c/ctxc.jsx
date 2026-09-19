import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ir4y4fk6l.css';
import '../../css/m/md286fbip.css';
import '../../css/k/k79cjmbud.css';
import '../../css/t/temaetemz.css';
import '../../css/y/yoipd9bvs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ir4y4fk6l"/><g class="md286fbip"><path class="k79cjmbud"/><path class="temaetemz"/><path class="yoipd9bvs"/></g></g>`,
		"fallback": "cryptocurrency-color:ctxc",
	});
}

export default Component;
