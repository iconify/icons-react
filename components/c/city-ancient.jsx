import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9tgavc3e.css';
import '../../css/v/vekjkdo5u.css';
import '../../css/d/d9ffd7b_b.css';
import '../../css/p/pjx4eu_3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y9tgavc3e"/><path class="vekjkdo5u"/><path class="d9ffd7b_b"/><path class="pjx4eu_3s"/></g>`,
		"fallback": "tdesign:city-ancient",
	});
}

export default Component;
