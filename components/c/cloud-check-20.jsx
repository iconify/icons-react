import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e82l9ab8r.css';
import '../../css/k/k6p64wbai.css';
import '../../css/e/e_8ojetoq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e82l9ab8r"/><path class="k6p64wbai"/><path class="e_8ojetoq"/>`,
		"fallback": "energy-icons:cloud-check-20",
	});
}

export default Component;
