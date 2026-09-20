import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aks-pwbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aks-pwbkq"/>`,
		"fallback": "lets-icons:close-square-fill",
	});
}

export default Component;
