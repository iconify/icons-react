import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kfjxj683d.css';
import '../../css/z/zqs39fbjf.css';
import '../../css/o/okxvgrb-h.css';
import '../../css/g/gme1-c65h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kfjxj683d"/><path class="zqs39fbjf"/><path class="okxvgrb-h"/><path class="gme1-c65h"/></g>`,
		"fallback": "lets-icons:folder-alt-duotone",
	});
}

export default Component;
