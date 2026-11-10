import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqa7h_o0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nqa7h_o0d"/>`,
		"fallback": "sidekickicons:bookmark-check-solid",
	});
}

export default Component;
