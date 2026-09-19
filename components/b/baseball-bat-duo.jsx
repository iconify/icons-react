import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bc2l054ta.css';
import '../../css/w/w_qvpc58d.css';
import '../../css/f/ffj0jbcke.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bc2l054ta"/><path class="w_qvpc58d"/><path class="ffj0jbcke"/></g>`,
		"fallback": "glyphs:baseball-bat-duo",
	});
}

export default Component;
