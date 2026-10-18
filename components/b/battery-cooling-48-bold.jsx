import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu4hgabyh.css';
import '../../css/p/pajsys7wq.css';
import '../../css/c/clnf1dbfu.css';
import '../../css/q/qx_f1tive.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu4hgabyh"/><path class="pajsys7wq"/><path class="clnf1dbfu"/><path class="qx_f1tive"/>`,
		"fallback": "energy-icons:battery-cooling-48-bold",
	});
}

export default Component;
