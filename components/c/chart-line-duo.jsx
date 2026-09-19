import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ok4hkrb_f.css';
import '../../css/v/vy3k7vjff.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ok4hkrb_f"/><path class="vy3k7vjff"/></g>`,
		"fallback": "glyphs:chart-line-duo",
	});
}

export default Component;
