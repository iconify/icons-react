import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hb0vw1bvi.css';
import '../../css/g/gzhz0wbkj.css';
import '../../css/m/mofc-ww5x.css';
import '../../css/w/w9x2wpv7m.css';
import '../../css/w/w4-_cxpts.css';
import '../../css/j/jnw9_o4gy.css';
import '../../css/n/nzunz9b9o.css';
import '../../css/k/kgaczpded.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hb0vw1bvi"/><path clip-rule="evenodd" class="gzhz0wbkj"/><path class="mofc-ww5x"/><path clip-rule="evenodd" class="w9x2wpv7m"/><path class="w4-_cxpts"/><path clip-rule="evenodd" class="jnw9_o4gy"/><path class="nzunz9b9o"/><path clip-rule="evenodd" class="kgaczpded"/></g>`,
		"fallback": "glyphs:barcode-read-outline",
	});
}

export default Component;
