import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysqx7v64s.css';
import '../../css/c/cry0eib_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysqx7v64s"/><path class="cry0eib_n"/>`,
		"fallback": "bxs:backpack",
	});
}

export default Component;
