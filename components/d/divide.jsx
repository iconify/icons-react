import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/n/nf2xt-brq.css';
import '../../css/f/f34tbbcbk.css';
import '../../css/g/gxs0dm8al.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="nf2xt-brq"/><rect class="f34tbbcbk"/><rect class="gxs0dm8al"/></g>`,
		"fallback": "glyphs-poly:divide",
	});
}

export default Component;
