import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2k9q-bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q2k9q-bar"/>`,
		"fallback": "solar:alt-arrow-down-outline",
	});
}

export default Component;
