import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw-t5bcty.css';
import '../../css/d/dqolik5wq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw-t5bcty"/><path class="dqolik5wq"/>`,
		"fallback": "energy-icons:bbq-48-bold",
	});
}

export default Component;
