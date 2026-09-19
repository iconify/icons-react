import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lafhkbbho.css';
import '../../css/m/moy2nm1qy.css';
import '../../css/w/w4vxnac6h.css';
import '../../css/g/g2v04sb6l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lafhkbbho"/><path class="moy2nm1qy"/><path class="w4vxnac6h"/><path class="g2v04sb6l"/></g>`,
		"fallback": "glyphs:compass-duo",
	});
}

export default Component;
