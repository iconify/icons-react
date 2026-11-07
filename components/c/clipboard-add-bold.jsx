import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvxlsjb-h.css';
import '../../css/f/f7qo9xbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvxlsjb-h"/><path clip-rule="evenodd" class="f7qo9xbae"/>`,
		"fallback": "solar:clipboard-add-bold",
	});
}

export default Component;
