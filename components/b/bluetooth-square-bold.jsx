import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni4guvo3k.css';
import '../../css/t/tkf6t0vzx.css';
import '../../css/k/kiitt-b2j.css';
import '../../css/y/yi3kozl7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni4guvo3k"/><path class="tkf6t0vzx"/><path class="kiitt-b2j"/><path clip-rule="evenodd" class="yi3kozl7c"/>`,
		"fallback": "solar:bluetooth-square-bold",
	});
}

export default Component;
