import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s28m-k17m.css';
import '../../css/p/p9comhf0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s28m-k17m"/><path clip-rule="evenodd" class="p9comhf0c"/>`,
		"fallback": "solar:archive-down-minimalistic-outline",
	});
}

export default Component;
