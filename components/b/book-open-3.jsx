import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hraek7b2t.css';
import '../../css/o/o_m_60cwc.css';
import '../../css/k/k3tzt1rkv.css';
import '../../css/x/xq0iavnjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hraek7b2t"/><path class="o_m_60cwc"/><path class="k3tzt1rkv"/><path class="xq0iavnjx"/></g>`,
		"fallback": "streamline-cyber-color:book-open-3",
	});
}

export default Component;
