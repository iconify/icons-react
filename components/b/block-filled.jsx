import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd6q1996p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vd6q1996p"/>`,
		"fallback": "bitcoin-icons:block-filled",
	});
}

export default Component;
