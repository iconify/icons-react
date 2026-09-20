import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/kl65e73tu.css';
import '../../css/p/pjt-08bmc.css';
import '../../css/y/yg8cl3xrt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="kl65e73tu"/><path class="pjt-08bmc"/><path class="yg8cl3xrt"/></g>`,
		"fallback": "streamline-plump:bicycle-bike",
	});
}

export default Component;
