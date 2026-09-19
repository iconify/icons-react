import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ow1pw5b1d.css';
import '../../css/z/zb6zeabax.css';
import '../../css/o/o3-x_ssyy.css';
import '../../css/v/vgjyz8brv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ow1pw5b1d"/><path clip-rule="evenodd" class="zb6zeabax"/><path class="o3-x_ssyy"/><path clip-rule="evenodd" class="vgjyz8brv"/></g>`,
		"fallback": "glyphs:hourglass-0-outline",
	});
}

export default Component;
