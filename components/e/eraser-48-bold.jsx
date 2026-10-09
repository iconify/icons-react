import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn8qmrq_l.css';
import '../../css/z/z_1yk_sgq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn8qmrq_l"/><path class="z_1yk_sgq"/>`,
		"fallback": "energy-icons:eraser-48-bold",
	});
}

export default Component;
