import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x95pl0b1p.css';
import '../../css/k/kby29y5kq.css';
import '../../css/h/h8cf16owo.css';
import '../../css/f/f_v564bkt.css';
import '../../css/t/tm5d6wbua.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x95pl0b1p"/><path class="kby29y5kq"/><rect class="h8cf16owo"/><path class="f_v564bkt"/><path class="tm5d6wbua"/></g>`,
		"fallback": "glyphs-poly:copy-2",
	});
}

export default Component;
