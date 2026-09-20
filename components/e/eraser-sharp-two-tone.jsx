import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xdh9roo8a.css';
import '../../css/r/rlvkt7p5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xdh9roo8a"/><path class="rlvkt7p5j"/></g>`,
		"fallback": "keyline-icons:eraser-sharp-two-tone",
	});
}

export default Component;
