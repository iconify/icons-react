import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/lj_kddc-h.css';
import '../../css/r/rw9j7qbfc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="lj_kddc-h"/><path class="rw9j7qbfc"/></g>`,
		"fallback": "glyphs-poly:bench",
	});
}

export default Component;
