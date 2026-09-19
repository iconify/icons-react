import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_31_yj-r.css';
import '../../css/r/rsmcvdeld.css';
import '../../css/f/f7qswl_2i.css';
import '../../css/r/ro0rf9bfd.css';
import '../../css/j/jvlzvebuk.css';
import '../../css/z/zee0nglfn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f_31_yj-r"/><path class="rsmcvdeld"/><path class="f7qswl_2i"/><path clip-rule="evenodd" class="ro0rf9bfd"/><path class="jvlzvebuk"/><path class="zee0nglfn"/></g>`,
		"fallback": "glyphs:hotel-1-bold",
	});
}

export default Component;
