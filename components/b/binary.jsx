import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osx9xfb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osx9xfb1r"/>`,
		"fallback": "noviair:binary",
	});
}

export default Component;
