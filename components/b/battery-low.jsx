import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/olpk-abtk.css';
import '../../css/o/ohzrneb_u.css';
import '../../css/l/lq2ydebmf.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="olpk-abtk"/><path class="ohzrneb_u"/><path class="lq2ydebmf"/></g>`,
		"fallback": "system-uicons:battery-low",
	});
}

export default Component;
