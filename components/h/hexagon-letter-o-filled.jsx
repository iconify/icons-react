import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcbdgybxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcbdgybxz"/>`,
		"fallback": "tabler:hexagon-letter-o-filled",
	});
}

export default Component;
