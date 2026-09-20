import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgvdncbht.css';
import '../../css/s/sz375c7xk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgvdncbht"/><path class="sz375c7xk"/>`,
		"fallback": "vaadin:camera",
	});
}

export default Component;
