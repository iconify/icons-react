import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bj-pxl6bp.css';
import '../../css/u/uue630blk.css';
import '../../css/p/pm7666zog.css';
import '../../css/g/g5y4hzclc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="bj-pxl6bp"/><path class="uue630blk"/><path class="pm7666zog"/><path class="g5y4hzclc"/></g>`,
		"fallback": "icon-park:bottle-one",
	});
}

export default Component;
