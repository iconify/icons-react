import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hj19qlbev.css';
import '../../css/x/xej447bav.css';
import '../../css/w/w19rbqhzk.css';
import '../../css/a/ahri7xbzg.css';
import '../../css/x/x1jbzxbbd.css';
import '../../css/u/udmqws72h.css';
import '../../css/f/flf--gbei.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hj19qlbev"/><path class="xej447bav"/><path class="w19rbqhzk"/><path clip-rule="evenodd" class="ahri7xbzg"/><path class="x1jbzxbbd"/><path class="udmqws72h"/><rect class="flf--gbei"/></g>`,
		"fallback": "glyphs-poly:house-flood",
	});
}

export default Component;
