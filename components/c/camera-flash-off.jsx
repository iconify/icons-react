import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/a/a_k5glbjj.css';
import '../../css/o/oqdf8xkin.css';
import '../../css/e/erwqvfa4h.css';
import '../../css/k/k8sfa5bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="a_k5glbjj"/><path class="oqdf8xkin"/><path class="erwqvfa4h"/><path class="k8sfa5bht"/></g>`,
		"fallback": "streamline-cyber-color:camera-flash-off",
	});
}

export default Component;
