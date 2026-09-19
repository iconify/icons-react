import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbvfrjx3h.css';
import '../../css/o/o27xq5dpn.css';
import '../../css/g/gnd_ri50r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tbvfrjx3h"/><path class="o27xq5dpn"/><path class="gnd_ri50r"/></g>`,
		"fallback": "glyphs:house-duo",
	});
}

export default Component;
