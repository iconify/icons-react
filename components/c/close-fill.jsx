import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7ir6kbdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m7ir6kbdg"/>`,
		"fallback": "mingcute:close-fill",
	});
}

export default Component;
