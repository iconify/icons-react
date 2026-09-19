import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gtww1vtox.css';
import '../../css/e/ek630uarv.css';
import '../../css/q/qmd_3c_tt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gtww1vtox"/><path class="ek630uarv"/><path class="qmd_3c_tt"/></g>`,
		"fallback": "glyphs:clock-1-duo",
	});
}

export default Component;
