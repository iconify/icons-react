import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zir9xpbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zir9xpbua"/>`,
		"fallback": "iconaut:arrow-u-turn-left-solid",
	});
}

export default Component;
