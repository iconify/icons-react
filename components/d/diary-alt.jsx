import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb6uizb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb6uizb4t"/>`,
		"fallback": "uil:diary-alt",
	});
}

export default Component;
