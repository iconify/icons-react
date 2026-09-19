import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpo1i1b2q.css';
import '../../css/f/fa29q174i.css';
import '../../css/x/xq8n2obgg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gpo1i1b2q"/><path class="fa29q174i"/><path class="xq8n2obgg"/></g>`,
		"fallback": "glyphs:box-close-duo",
	});
}

export default Component;
