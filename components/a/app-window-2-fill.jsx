import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru_aw2bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ru_aw2bra"/>`,
		"fallback": "keyline-icons:app-window-2-fill",
	});
}

export default Component;
