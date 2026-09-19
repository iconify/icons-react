import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d49z1cc5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d49z1cc5i"/>`,
		"fallback": "iconamoon:compare",
	});
}

export default Component;
