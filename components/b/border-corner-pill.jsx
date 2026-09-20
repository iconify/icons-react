import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_5j7i_8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_5j7i_8z"/>`,
		"fallback": "tabler:border-corner-pill",
	});
}

export default Component;
