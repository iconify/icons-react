import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf7fidc9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf7fidc9j"/>`,
		"fallback": "noviair:backpack-check",
	});
}

export default Component;
