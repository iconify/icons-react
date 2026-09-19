import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vlx_mbcyg.css';
import '../../css/b/bo5ct3btu.css';
import '../../css/g/gch2qubat.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vlx_mbcyg"/><path class="bo5ct3btu"/><path class="gch2qubat"/></g>`,
		"fallback": "glyphs:credit-card-front-duo",
	});
}

export default Component;
