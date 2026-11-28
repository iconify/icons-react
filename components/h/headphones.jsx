import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzznv0gvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzznv0gvc"/>`,
		"fallback": "noviair-light:headphones",
	});
}

export default Component;
