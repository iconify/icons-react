import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/m/me3dgg7xk.css';
import '../../css/m/mp8_gtb8l.css';
import '../../css/v/vrs4t5x8c.css';
import '../../css/v/vntch8b1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="me3dgg7xk"/><path class="mp8_gtb8l"/><path class="vrs4t5x8c"/><path class="vntch8b1w"/></g>`,
		"fallback": "streamline-sharp-color:ice-cream-1",
	});
}

export default Component;
