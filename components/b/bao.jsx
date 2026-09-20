import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyu-xlb4c.css';
import '../../css/m/m1ot_8bgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyu-xlb4c"/><path clip-rule="evenodd" class="m1ot_8bgg"/>`,
		"fallback": "token:bao",
	});
}

export default Component;
