import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mezec7btn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mezec7btn"/>`,
		"fallback": "mingcute:documents-fill",
	});
}

export default Component;
