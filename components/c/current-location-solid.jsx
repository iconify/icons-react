import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pejqq1mje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pejqq1mje"/>`,
		"fallback": "basil:current-location-solid",
	});
}

export default Component;
