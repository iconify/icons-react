import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo45y_b3k.css';
import '../../css/k/k70t2o__t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo45y_b3k"/><path class="k70t2o__t"/>`,
		"fallback": "boxicons:atom-filled",
	});
}

export default Component;
