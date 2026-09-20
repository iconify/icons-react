import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/df5vh9b_c.css';
import '../../css/y/y9p37it8g.css';
import '../../css/s/swts19n6q.css';
import '../../css/d/d3lhv2bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="df5vh9b_c"/><path class="y9p37it8g"/><path class="swts19n6q"/><path class="d3lhv2bby"/></g>`,
		"fallback": "streamline-ultimate-color:filter-text",
	});
}

export default Component;
