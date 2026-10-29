import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/em-dy2t7x.css';
import '../../css/b/b-17occjh.css';
import '../../css/b/bkprrvblz.css';
import '../../css/k/kq4anp9be.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="em-dy2t7x"/><path class="b-17occjh wm-a"/><path class="bkprrvblz wm-k"/><path class="kq4anp9be wm-a"/></g>`,
		"fallback": "withicons:globe-sketch",
	});
}

export default Component;
