import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l26hlcvna.css';
import '../../css/d/dpqbvn50y.css';
import '../../css/m/mqhfzvbma.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l26hlcvna"/><path class="dpqbvn50y"/><rect class="mqhfzvbma"/></g>`,
		"fallback": "glyphs:clipboard-bold",
	});
}

export default Component;
