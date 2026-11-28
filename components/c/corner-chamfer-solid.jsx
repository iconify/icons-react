import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyfr0tjbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyfr0tjbz"/>`,
		"fallback": "iconaut:corner-chamfer-solid",
	});
}

export default Component;
