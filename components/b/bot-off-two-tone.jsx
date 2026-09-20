import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oy4h8qb7d.css';
import '../../css/v/vb31y2bry.css';
import '../../css/n/n-xh2vi9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oy4h8qb7d"/><path class="vb31y2bry"/><path class="n-xh2vi9p"/></g>`,
		"fallback": "keyline-icons:bot-off-two-tone",
	});
}

export default Component;
