import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ixa9i89oh.css';
import '../../css/m/mj6mvfbak.css';
import '../../css/f/f1lq2jbwk.css';
import '../../css/q/q2lp95bup.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ixa9i89oh"/><path class="mj6mvfbak"/><path class="f1lq2jbwk"/><path class="q2lp95bup"/></g>`,
		"fallback": "glyphs:farm-duo",
	});
}

export default Component;
