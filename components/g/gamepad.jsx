import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6_hgo1gh.css';
import '../../css/d/d-q9u0ozl.css';
import '../../css/w/wom5eac6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s6_hgo1gh"/><path class="d-q9u0ozl"/><path class="wom5eac6f"/></g>`,
		"fallback": "tdesign:gamepad",
	});
}

export default Component;
