import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh3tcpbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh3tcpbua"/>`,
		"fallback": "thesvg:cairo-graphics",
	});
}

export default Component;
