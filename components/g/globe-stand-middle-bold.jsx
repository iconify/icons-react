import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zk_skwi6v.css';
import '../../css/p/pvyxalenk.css';
import '../../css/h/h5_6wb9kx.css';
import '../../css/s/s3-pvbj0c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zk_skwi6v"/><path class="pvyxalenk"/><path class="h5_6wb9kx"/><path clip-rule="evenodd" class="s3-pvbj0c"/></g>`,
		"fallback": "glyphs:globe-stand-middle-bold",
	});
}

export default Component;
