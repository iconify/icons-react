import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jvw3jkjnb.css';
import '../../css/n/nnd8v_bmg.css';
import '../../css/g/gv-lolbnd.css';
import '../../css/r/ropa7ebap.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jvw3jkjnb"/><path class="nnd8v_bmg"/><path class="gv-lolbnd"/><path class="ropa7ebap"/></g>`,
		"fallback": "glyphs:cloudy-partly-duo",
	});
}

export default Component;
