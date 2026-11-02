import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zip9yv1tu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zip9yv1tu"/>`,
		"fallback": "mingcute:fire-line",
	});
}

export default Component;
