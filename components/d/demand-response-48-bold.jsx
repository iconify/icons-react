import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz_20zb_f.css';
import '../../css/x/xotqs1byb.css';
import '../../css/t/teq-8kbsy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz_20zb_f"/><path class="xotqs1byb"/><path class="teq-8kbsy"/>`,
		"fallback": "energy-icons:demand-response-48-bold",
	});
}

export default Component;
