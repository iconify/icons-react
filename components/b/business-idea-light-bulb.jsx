import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/r/ri309n8_l.css';
import '../../css/w/w50yv1b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ri309n8_l"/><path class="w50yv1b4d"/></g>`,
		"fallback": "streamline-cyber:business-idea-light-bulb",
	});
}

export default Component;
