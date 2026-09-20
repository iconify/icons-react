import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laizaxi8c.css';
import '../../css/q/q74t5xb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laizaxi8c"/><path class="q74t5xb8p"/>`,
		"fallback": "uim:align",
	});
}

export default Component;
