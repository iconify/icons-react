import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i793flwcp.css';
import '../../css/u/uejg4q-3x.css';
import '../../css/v/vwqgwrb7v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i793flwcp"/><path class="uejg4q-3x"/><path class="vwqgwrb7v"/></g>`,
		"fallback": "glyphs:house-fire-duo",
	});
}

export default Component;
