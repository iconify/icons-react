import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0c3j_bcd.css';
import '../../css/y/ygu_5pblt.css';
import '../../css/h/hcy7qub0l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l0c3j_bcd"/><path class="ygu_5pblt"/><path class="hcy7qub0l"/></g>`,
		"fallback": "glyphs-poly:check-circle",
	});
}

export default Component;
