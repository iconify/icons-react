import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq8br0b3r.css';
import '../../css/e/ey4fggn5o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq8br0b3r"/><path class="ey4fggn5o"/>`,
		"fallback": "energy-icons:file-warning-20-bold",
	});
}

export default Component;
