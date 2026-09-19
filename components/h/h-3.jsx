import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puqwrkb4c.css';
import '../../css/i/imxvelbms.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="puqwrkb4c"/><path class="imxvelbms"/></g>`,
		"fallback": "glyphs-poly:h-3",
	});
}

export default Component;
