import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej3erva_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej3erva_k"/>`,
		"fallback": "mingcute:heading-1-line",
	});
}

export default Component;
