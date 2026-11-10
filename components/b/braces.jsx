import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uum3rn3oq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uum3rn3oq"/>`,
		"fallback": "proicons:braces",
	});
}

export default Component;
