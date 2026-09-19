import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_vvnyb1r.css';
import '../../css/q/q-th0ygww.css';
import '../../css/n/n5hd3rctn.css';
import '../../css/j/j507dht9b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="x_vvnyb1r"/><path class="q-th0ygww"/><path class="n5hd3rctn"/><path class="j507dht9b"/></g>`,
		"fallback": "glyphs-poly:album",
	});
}

export default Component;
