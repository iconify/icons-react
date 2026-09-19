import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zzqx4w9ah.css';
import '../../css/p/p5re7h0eo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zzqx4w9ah"/><path class="p5re7h0eo"/></g>`,
		"fallback": "glyphs:chart-bar-duo",
	});
}

export default Component;
