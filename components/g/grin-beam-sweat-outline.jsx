import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ownno6b1t.css';
import '../../css/u/uk_qrqhcy.css';
import '../../css/o/o8ws2ibpr.css';
import '../../css/m/m1wbw2bxz.css';
import '../../css/i/i86vhi2cf.css';
import '../../css/g/gfy4qmhib.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ownno6b1t"/><path class="uk_qrqhcy"/><path clip-rule="evenodd" class="o8ws2ibpr"/><path clip-rule="evenodd" class="m1wbw2bxz"/><path class="i86vhi2cf"/><path clip-rule="evenodd" class="gfy4qmhib"/></g>`,
		"fallback": "glyphs:grin-beam-sweat-outline",
	});
}

export default Component;
