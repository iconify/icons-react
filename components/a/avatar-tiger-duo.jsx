import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xj4wsjbbd.css';
import '../../css/c/cypvusbcd.css';
import '../../css/x/xti3v3blg.css';
import '../../css/s/ssadnlb_w.css';
import '../../css/r/r2o5n7qei.css';
import '../../css/f/fnkyt8ypq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xj4wsjbbd"/><path class="cypvusbcd"/><path class="wm-a xti3v3blg"/><path class="ssadnlb_w"/><path class="r2o5n7qei"/><path class="fnkyt8ypq wm-a"/></g>`,
		"fallback": "withicons:avatar-tiger-duo",
	});
}

export default Component;
