import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t6kb3_4pb.css';
import '../../css/g/g6atfsbre.css';
import '../../css/i/im55_4bjj.css';
import '../../css/a/aza0107_f.css';
import '../../css/k/k40u_rbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="t6kb3_4pb wm-shadow"/><path class="g6atfsbre wm-shadow"/><path class="im55_4bjj"/><path class="aza0107_f"/><path class="k40u_rbrt"/></g>`,
		"fallback": "withicons-brutal:heart-pulse",
	});
}

export default Component;
