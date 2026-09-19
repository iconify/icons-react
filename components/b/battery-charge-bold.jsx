import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__s2g6zp.css';
import '../../css/f/f4sd56baf.css';
import '../../css/b/bbhoyd3dh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a__s2g6zp"><path class="f4sd56baf"/><path class="bbhoyd3dh"/></g>`,
		"fallback": "glyphs:battery-charge-bold",
	});
}

export default Component;
