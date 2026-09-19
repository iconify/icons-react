import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fr8kns7oi.css';
import '../../css/r/r24ndllyp.css';
import '../../css/j/jr2950bfp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fr8kns7oi"/><path class="r24ndllyp"/><path class="jr2950bfp"/></g>`,
		"fallback": "glyphs:box-1-duo",
	});
}

export default Component;
