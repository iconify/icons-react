import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3yq9dhzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t3yq9dhzy"/>`,
		"fallback": "solar:fire-outline",
	});
}

export default Component;
