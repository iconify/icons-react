import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5rak2bbx.css';
import '../../css/q/qnvn8ia7m.css';
import '../../css/v/vai4pdqog.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5rak2bbx"/><path class="qnvn8ia7m"/><path class="vai4pdqog"/>`,
		"fallback": "energy-icons:ceiling-light-48-bold",
	});
}

export default Component;
