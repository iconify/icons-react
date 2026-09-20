import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn30erbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn30erbqx"/>`,
		"fallback": "thesvg-color:caddy",
	});
}

export default Component;
