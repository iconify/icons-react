import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh14zko1u.css';
import '../../css/u/uouny_b5s.css';
import '../../css/p/pnj4t1rqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh14zko1u"/><path class="uouny_b5s"/><path class="pnj4t1rqz"/>`,
		"fallback": "withicons-bauhaus:crop",
	});
}

export default Component;
