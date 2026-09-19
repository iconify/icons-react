import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v37z0qh7q.css';
import '../../css/h/h-mo3zb6z.css';
import '../../css/i/i_ivz8b-r.css';
import '../../css/u/ut5kdvhli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v37z0qh7q"/><rect class="h-mo3zb6z"/><rect class="i_ivz8b-r"/><rect class="ut5kdvhli"/>`,
		"fallback": "boxicons:blocks-filled",
	});
}

export default Component;
