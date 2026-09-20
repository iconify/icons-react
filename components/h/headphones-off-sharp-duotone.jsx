import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zs8bi0bys.css';
import '../../css/s/sh3xxe9ap.css';
import '../../css/f/f4vx4ccga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zs8bi0bys"/><path class="sh3xxe9ap"/><path class="f4vx4ccga"/></g>`,
		"fallback": "keyline-icons:headphones-off-sharp-duotone",
	});
}

export default Component;
