import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd8hkcb1c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd8hkcb1c"/>`,
		"fallback": "game-icons:icarus",
	});
}

export default Component;
