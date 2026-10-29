import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sci640bhs.css';
import '../../css/b/bj-rp9qcq.css';
import '../../css/t/tv7ggr2_t.css';
import '../../css/a/azxfktbgs.css';
import '../../css/z/zhjtmfbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sci640bhs wm-k"/><path class="bj-rp9qcq wm-a"/><path class="tv7ggr2_t wm-shadow"/><path class="azxfktbgs wm-k"/><path class="wm-a zhjtmfbrj"/></g>`,
		"fallback": "withicons:chevron-last-engrave",
	});
}

export default Component;
