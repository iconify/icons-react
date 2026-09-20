import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jntsl4bpd.css';
import '../../css/d/dnpln_3qt.css';
import '../../css/v/vi_wlnn0e.css';
import '../../css/s/s30_6-k1u.css';
import '../../css/o/oi_ootbak.css';
import '../../css/z/ziv47mpgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jntsl4bpd"/><path class="dnpln_3qt"/><path class="vi_wlnn0e"/><path class="s30_6-k1u"/><path class="oi_ootbak"/><path class="ziv47mpgd"/></g>`,
		"fallback": "streamline-ultimate-color:flash-drive",
	});
}

export default Component;
