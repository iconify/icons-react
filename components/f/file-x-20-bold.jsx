import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8im5qk_h.css';
import '../../css/e/e_7t3qbca.css';
import '../../css/m/mbnoe73fs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8im5qk_h"/><path class="e_7t3qbca"/><path class="mbnoe73fs"/>`,
		"fallback": "energy-icons:file-x-20-bold",
	});
}

export default Component;
