import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htpn1ob9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htpn1ob9g"/>`,
		"fallback": "tabler:bell-star",
	});
}

export default Component;
