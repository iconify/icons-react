import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvxlsjb-h.css';
import '../../css/y/ypgjm6kne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvxlsjb-h"/><path clip-rule="evenodd" class="ypgjm6kne"/>`,
		"fallback": "solar:clipboard-list-bold",
	});
}

export default Component;
