import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/la9i8y6nd.css';
import '../../css/c/c8jcj_qhj.css';
import '../../css/z/z2vp3obet.css';
import '../../css/j/jj_oncb1i.css';
import '../../css/b/bg53-whty.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="la9i8y6nd"/><path class="c8jcj_qhj"/><path class="z2vp3obet"/><path class="jj_oncb1i"/><path class="bg53-whty"/></g>`,
		"fallback": "glyphs-poly:canoe",
	});
}

export default Component;
