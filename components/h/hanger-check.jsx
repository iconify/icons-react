import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baa3j3bkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baa3j3bkw"/>`,
		"fallback": "noviair:hanger-check",
	});
}

export default Component;
