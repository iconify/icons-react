import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bmrn8acqb.css';
import '../../css/l/lww7c4bwc.css';
import '../../css/x/xbqzh6bgi.css';
import '../../css/s/smie_ib3h.css';
import '../../css/q/qso6odhhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bmrn8acqb"/><path class="lww7c4bwc"/><path class="xbqzh6bgi"/><path class="smie_ib3h"/><path class="qso6odhhx"/></g>`,
		"fallback": "iconaut:gate-nor",
	});
}

export default Component;
