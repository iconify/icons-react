import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o7dxpnd-i.css';
import '../../css/x/xb5banbts.css';
import '../../css/k/kphxh9b_m.css';
import '../../css/a/al9gchr-i.css';
import '../../css/y/yxdw3yyvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o7dxpnd-i"/><path class="xb5banbts"/><path class="kphxh9b_m"/><path class="al9gchr-i"/><path class="yxdw3yyvq"/></g>`,
		"fallback": "streamline-cyber-color:book-open",
	});
}

export default Component;
